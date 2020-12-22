const server = require('express').Router();
const { Order, OrderLine } = require('../db.js');

//---------------- Update or Create Cart
server.post('/users/:userId/cart', (req, res, next) => {
  const { userId } = req.params;
  const { idProduct, amount } = req.body;

  // El user tiene Order ?
  Order.findOne({
    where: {
      client_id: userId,
      status: 'on_cart' // Tiene que tener el estado en carrito, para poder agregar más items.
    }
  }).then(order => {

    // Si no tiene, se crea una Order.
    if (!order) {

      Order.create({
        client_id: userId,
        status: 'on_cart'
      })

        // Creo una OrderLine
        .then((order) => {
          /*  console.log("<<<>>>", idProduct, amount) */
          const orderId = order.dataValues.id;

          OrderLine.create({
            quantity: amount,
            productId: idProduct,  // Le asigno el id del producto.
<<<<<<< HEAD
            orderId: order.id   // Le asigno el id de la orden
          });
          return res.send(order.dataValues);
=======
            client_id: orderId   // Le asigno el id de la orden
          })
            .then((orderLine) => {
              return res.send(orderLine)
            })
            .catch(next);
>>>>>>> S53-Reviews_model
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
<<<<<<< HEAD

      });

    }
  });
});

=======
      })
    }
  }
  )
})
>>>>>>> S53-Reviews_model

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

// FALTA TERMINAR.

// ---> 44 45 46 47 <-- REVISAR CON POSTMAN!!

<<<<<<< HEAD
server.get('/status/:status', (req, res, next) => {
  //Esta ruta puede recibir el query string "status" y deberá devolver sólo las ordenes con ese status.
  //vamos a adivinar
  const status = req.params.status; //query string status

=======
server.get('/status/:status', (req, res) => {
  //Esta ruta puede recibir el query string "status" y deberá devolver sólo las ordenes con ese status.
  //vamos a adivinar
  var status = req.params.status //query string status
>>>>>>> S53-Reviews_model
  Order.findAll({ //busca todas las ordenes
    where: {
      status //que tengan este argumento especifico (un estado)
    }
  }).then((orders) => {
<<<<<<< HEAD
    return res.send(orders); //devuelve esas ordenes
  }).catch(next);
});


server.get('/users/:id/orders', (req, res, next) => {
  //devuelve las ordenes de usuarios
  const { id } = req.params;

  Order.findAll({ //busca las ordenes
    where: { id } //<-- del usuario especifico
  }).then((order) => {
    return res.send(order); //devuelve las ordenes
  }).catch(next);
});


server.put('/edit/id/:id', (req, res, next) => {

  //modifica una orden

  const { id } = req.params;
  const { totalPrice, status } = req.body;

  Order.update({
    totalPrice,
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
=======
    return res.send(orders) //devuelve esas ordenes
  }).catch((err) => {
    return res.send(err) //o devuelve un error
  })

});

server.get('/users/:id/orders', (req, res, next) => {
  //devuelve las ordenes de usuarios



});



server.put('/edit/id/:id', (req, res) => {

  //modifica una orden


});

// server.get('/:id', (req, res) => { 
//   //una orden particular

//  });


module.exports = server;
>>>>>>> S53-Reviews_model
