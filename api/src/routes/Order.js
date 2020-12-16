const server = require('express').Router();
const { User, Order } = require('../db.js');


server.post('users/:idUser/cart', (req, res, next) => {
  const {idUser} = req.params;
  const {totalPrice} = req.body

  Order.findOne({
    where: {
      client_id: idUser
    }
  }).then(cart => {
    if(totalPrice){
      Order.create({
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

  
});

// FALTA TERMINAR.