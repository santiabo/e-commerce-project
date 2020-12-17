const server = require('express').Router();
const { Order, OrderLine } = require('../db.js');

// Update or Create Cart
server.post('/users/:userId/cart', (req, res, next) => {
  const { userId } = req.params;
  const { idProduct, amount } = req.body;

  // El user tiene Order ?
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
          })
          return res.send(order.dataValues)
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

      })

    }
  })
});


server.get('/users/:userId/cart', (req, res, next) => {
  const { userId } = req.params;

  Order.findOne({
    where: {
      client_id: userId,
      status: 'on_cart'
    }
  })
    .then((order) => {
      if (!order) {
        return res.status(404).send({ error: `User doesn't have an order` })
      } else
        OrderLine.findAll({
          where: { orderId: order.id }
        })
          .then((orderLine) => {
            let totalProducts = orderLine.map(e => `Id: ${e.productId} Amount: ${e.quantity}`);
            return res.send({ totalProducts })
          })
    })
    .catch(next)

})

server.delete('/users/:userId/cart', (req, res, next) => {
  const { userId } = req.params;

  Order.destroy({
    where: { client_id: userId }
  })
    .then((data) => {
      return res.send({ CartDeleted: `User ID: ${Number(userId)}` });

    })
    .catch(next);
});

module.exports = server;
