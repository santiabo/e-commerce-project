const server = require('express').Router();
const { Order, OrderLine, Product } = require('../db.js');

//---------------- Update or Create Cart.
server.post('/users/:userId/cart', (req, res, next) => {
  const { userId } = req.params;
  const { idProduct, amount } = req.body;

  // El user tiene Order ?
  Order.findOne({
    where: {
       userId,
      status: 'on_cart' // Tiene que tener el estado en carrito, para poder agregar más items.
    }
  }).then(order => {

    // Si no tiene, se crea una Order.
    if (!order) {

      Order.create({
         userId,
        status: 'on_cart'
      })

        // Creo una OrderLine
        .then((order) => {

          const orderId = order.dataValues.id;

          OrderLine.create({
            quantity: amount,
            productId: idProduct,  // Le asigno el id del producto.
            orderId: orderId   // Le asigno el id de la orden
          })
            .then((orderLine) => {
              return res.send(orderLine)
            })
            .catch(next);
        })
        .catch(next);
    } else {
      // Tiene una orderLine con ese producto ?
      OrderLine.findOne({
        where: {
          productId: idProduct,
          orderId: order.id
        }
      }).then((orderLine) => {
        const thisOrderline = orderLine;
        //Si ya tiene orderLine con ese producto, se le suma la cantidad.
        if (thisOrderline) {

          OrderLine.update(
            { quantity: amount },
            { where: { productId: idProduct } }
          )
            .then(() => {
              OrderLine.findOne({
                where: {
                  productId: idProduct,
                  orderId: order.id
                }
              }).then((orderLine) => {
                return res.send({ ...orderLine.dataValues });
              })
              .catch(next);
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
      })
    }
  }
  )
})
//----------------Get user cart.
server.get('/users/:userId/cart', (req, res, next) => {
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
            let totalProducts = orderLine.map(e => `Id: ${e.productId} Amount: ${e.quantity}`);
            return res.send({ totalProducts });
          });
    })
    .catch(next);

});
//-----------------Delete user cart.
server.delete('/users/:userId/cart', (req, res, next) => {
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
server.put('/users/:id/cart', async (req, res, next) => {
  const { id } = req.params;
  const { quantity, productId } = req.body;

  try {
     const order = await Order.findOne({
      where: {
        userId: id
      }
    }) 
    if (quantity < 1) {
     await OrderLine.destroy({
        where: {
          productId,
          orderId: order.dataValues.id
        }
      });
      const aux = await OrderLine.findOne({
        where: {
          productId: productId,
          orderId: order.id
        }
      })
      
      return res.send("Order deleted ");
    } else {
      await OrderLine.update(
        { quantity },
        {
          where: {
            productId: productId,
            orderId: order.id
          }
        });
        const orderLine3 = await OrderLine.findOne({
          where: {
            productId: productId,
            orderId: order.id
          }
        })

      return res.send(orderLine3);
    }
  }
  catch (e) {
    next(e);
  }
})

// FALTA TERMINAR.

// ---> 44 45 46 47 <-- REVISAR CON POSTMAN!!

server.get('/status/:status', (req, res, next) => {
  //Esta ruta puede recibir el query string "status" y deberá devolver sólo las ordenes con ese status.
  //vamos a adivinar
  const status = req.params.status //query string status
  Order.findAll({ //busca todas las ordenes
    where: {
      status //que tengan este argumento especifico (un estado)
    }
  }).then((orders) => {
    return res.send(orders); //devuelve esas ordenes
  }).catch(next);
});


server.get('/users/:id/orders', (req, res, next) => {
  //devuelve las ordenes de usuarios
  const { id } = req.params;

  Order.findAll({ //busca las ordenes
    where: {userId: id } //<-- del usuario especifico
  }).then((order) => {
    return res.send(order); //devuelve las ordenes
  }).catch(next);
});


server.put('/edit/id/:id', (req, res, next) => {

  //modifica una orden

  const { id } = req.params;
  const { total, status } = req.body;

  Order.update({
    total,
    status
  },
    { where: { id } }
  )
    .then(order => {
      return res.send(order);
    })
    .catch(next);
});


// server.get('/:id', async (req, res, next) => {
server.get('/:id', (req, res) => {

  //una orden particular
  const { id } = req.params;

  // try {
  //   const order = await Order.findByPk(id);
  //   res.send(order);
  // } catch (error) {
  //   next(error);
  // }

  Order.findByPk(id) //busca una orden
    .then((order) => {
      return res.send(order); //devuelve esa orden
    }).catch((err) => {
      return res.send(err); //o devuelve un error
    });
});


module.exports = server;
