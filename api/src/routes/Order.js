const server = require('express').Router();
const { User, Order } = require('../db.js');
const OrderLine = require('../models/OrderLine.js');

// Update or Create Cart
server.post('users/:idUser/cart', (req, res, next) => {
  const { idUser } = req.params;
  const {idProduct, quantity} = req.body;
 
 
  // El user tiene Order ?
  Order.findOne({
    where: {
      client_id: idUser,
      status: 'on_cart' // Tiene que tener el estado en carrito, para poder agregar mas items.
    }
  }).then(c => {

    // si no tiene, se crea una Order.
    if (!c) {
      Order.create({
        idUser,
        status: 'on_cart'
      })
        // Creo una OrderLine
        .then((cart) => {
          res.send({ ...cart.dataValues });
        })
        .catch(next);

    } else {
      Order.update({
        idUser,
        totalPrice,
        status: 'on_cart'
      })
        .then((cart) => {
          res.send({ ...cart.dataValues });
        })
        .catch(next);
    }
  })

 /* Busco una order line con el mismo producto, si la encuentro le sumo la cantidad 
OrderLine.findOne({
  where: {
    product_id: idProduct
  }
}).then(orderLine =>{
 OrderLine.update({
   quantity
 })
})

 
  OrderLine.create({
   quantity,
   product_id: idProduct  
 })
 */

  
  
});

//

// FALTA TERMINAR.
