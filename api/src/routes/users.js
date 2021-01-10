const server = require('express').Router();
const { User, Order, OrderLine, Product } = require('../db');
const { isUser, isAdmin } = require('../middlewares/auth');


// User creation route
server.post("/", async (req, res, next) => {
  try {
    const result = await User.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

// User update route
server.put("/:id", isUser, async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.update(req.body, { where: { id }, returning: true });
    res.status(202).json(result);
  } catch (error) {
    next(error);
  }
});

// All users route
server.get("/", isAdmin, async (req, res, next) => {
  try {
    //si no esta logueado como admin no puede hacer un get de todos los usuarios      
    const result = await User.findAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// User delete route
server.delete('/:id', isAdmin, (req, res, next) => {
  const { id } = req.params;
  User.destroy({
    where: { id }
  })
    .then(() => {
      return res.send({ UserDeleted: `id: ${Number(id)}` });

    })
    .catch(next);
});

//----------------Post Cart User(REVISAR URGENTEMENTE!)
server.post('/:userId/cart', isUser, async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { cart } = req.body;
    const order = await Order.findOrCreate({
      where: {
        userId,
        status: 'on_cart',
      }
    })
    const { id } = order[0].dataValues
    cart.map(async p => {
      await OrderLine.findOrCreate({
        where: {
          quantity: p.quantity,
          productId: p.id,
          orderId: id,
          price: p.price
        }
      })
    })
    const userCart = await OrderLine.findAll({
      where: {
        orderId: order[0].dataValues.id
      },
      include: [
        Product,
        Order
      ]
    })
    return res.send(userCart);
  } catch (error) {
    next(error)
  }
})

//----------------Get user cart.
server.get('/:userId/cart', isUser, (req, res, next) => {
  const { userId } = req.params;

  Order.findOne({
    where: {
      userId,
      status: 'on_cart'
    }
  })
    .then((order) => {
      if (!order) {
        return res.status(404).send({ error: `User doesn't have an order` });
      } else
        OrderLine.findAll({
          where: { orderId: order.id }
        })
          .then((orderLine) => {
            let totalProducts = orderLine.map(e => ({
              productId: e.productId,
              quantity: e.quantity,
              price: e.price
            }));
            return res.send({ totalProducts });
          });
    })
    .catch(next);
});

//-----------------Delete user cart.
server.delete('/:userId/cart', isUser, (req, res, next) => {
  const { userId } = req.params;

  Order.destroy({
    where: { userId }
  })
    .then((data) => {
      return res.send({ CartDeleted: `User ID: ${Number(userId)}` });

    })
    .catch(next);
});
//-------------Update or delete product from cart.
server.put('/:id/cart', isUser, async (req, res, next) => {
  const { id } = req.params;
  const { quantity, productId } = req.body;

  try {
    const order = await Order.findOne({
      where: {
        userId: id
      }
    });
    if (quantity < 1) {
      await OrderLine.destroy({
        where: {
          productId,
          orderId: order.dataValues.id
        }
      });
      return res.send("Order deleted ");
    } else {
      await OrderLine.update(
        { quantity },
        {
          where: {
            productId,
            orderId: order.id
          }
        });
      const orderLine3 = await OrderLine.findOne({
        where: {
          productId: productId,
          orderId: order.id
        }
      });

      return res.send(orderLine3);
    }
  }
  catch (e) {
    next(e);
  }
});

//-------------Get User Order
server.get('/:id/orders',  /* isUser, */ (req, res, next) => {
  //devuelve las ordenes de usuarios
  const { id } = req.params;

  Order.findAll({ //busca las ordenes
    where: { userId: id }, //<-- del usuario especifico
    include: [{
      model: OrderLine,
      include: [{
        model: Product
      }],
    }]

  }).then((order) => {
    return res.send(order); //devuelve las ordenes
  }).catch(next);
});

//--------------Password Reset Route
server.post('/:id/passwordReset', isUser, async (req, res, next) => {
  const { id } = req.params;
  const newPassword = req.body.password;
  try {
    const result = await User.findByPk(id);
    result.update({
      password: newPassword,
    }); res.send('Password Updated');
  } catch (error) {
    next(error);
  }
});

//-------------- Ban User
server.put('/:id/ban', isAdmin, async (req, res, next) => {
  const { id } = req.params;
  try {
    const ban = await User.findByPk(id);
    ban.update({
     isBanned: true,
    }); res.send('User Banned');
  } catch (error) {
    next(error);
  }
});

module.exports = server;