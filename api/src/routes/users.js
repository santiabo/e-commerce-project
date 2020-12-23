const server = require('express').Router();
const { User } = require('../db');
const { DB_SECRET } = process.env;


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

server.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.update(req.body, { where: id, returning: true });
    res.status(202).json(result);
  } catch (error) {
    next(error);
  }
});


// All users route

server.get("/", async (req, res, next) => {
  try {
    //si no esta logueado como admin no puede hacer un get de todos los usuarios
    if (req.user) {
      const result = await User.findAll();
      res.json(result);
    } else {
      res.sendStatus(401);;
    }
  } catch (error) {
    next(error);
  }
});

// User delete route

server.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  User.destroy({
    where: { id }
  })
    .then(() => {
      return res.send({ UserDeleted: `id: ${Number(id)}` });

    })
    .catch(next);
});


// Update or Create Cart
server.post('/:userId/cart', (req, res, next) => {
  const { userId } = req.params;
  const { idProduct, amount } = req.body;

  // El user tiene Order ?
  if (req.user) {
    Order.findOne({
      where: {
        client_id: userId,
        status: 'on_cart' // Tiene que tener el estado en carrito, para poder agregar mas items.
      }
    }).then(order => {

      // si no tiene, se crea una Order.
      if (!order) {
        Order.create({
          client_id: userId,
          status: 'on_cart'
        })

          // Creo una OrderLine
          .then((order) => {
            OrderLine.create({
              quantity: amount,
              productId: idProduct,  // Le asigno el id del producto.
              orderId: order.id   // Le asigno el id de la orden
            });
            return res.send(order.dataValues);
          })
          .catch(next);
        // Si ya tiene una order.
      } else {
        // Tiene una orderLine con ese producto ?
        OrderLine.findOne({
          where: {
            productId: idProduct,
            orderId: order.id
          }
        }).then((orderLine) => {

          //Si ya tiene orderLine con ese producto, se le suma la cantidad.
          if (orderLine) {

            OrderLine.update(
              { quantity: amount },
              { where: { productId: idProduct } }
            )
              .then((orderLine) => {
                return res.send({ ItemsQuantity: `Changed to: ${amount}` });
              })
              .catch(next);
          } else {

            //si no tiene, se crea una OrderLine
            OrderLine.create({
              quantity: amount,
              productId: idProduct,  // Le asigno el id del producto.
              orderId: order.id   // Le asigno el id de la orden
            })
              .then((orderLine) => {
                return res.send({ ...orderLine.dataValues });
              })
              .catch(next);

          }

        });

      }
    })
  } return res.redirect(401, '/login');
});


server.get('/:userId/cart', (req, res, next) => {
  const { userId } = req.params;

  if(req.user){
  Order.findOne({
    where: {
      client_id: userId,
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
            let totalProducts = orderLine.map(e => `Id: ${e.productId} Amount: ${e.quantity}`);
            return res.send({ totalProducts });
          });
    })
    .catch(next);
  }return res.redirect(401,'/login')
});

server.delete('/:userId/cart', (req, res, next) => {
  const { userId } = req.params;

  Order.destroy({
    where: { client_id: userId }
  })
    .then(() => {
      return res.send({ CartDeleted: `User ID: ${Number(userId)}` });

    })
    .catch(next);
});


module.exports = server;