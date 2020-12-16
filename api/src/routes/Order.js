const server = require('express').Router();
const { User, Order } = require('../db.js');

// Update or Create Cart
server.post('users/:idUser/cart', (req, res, next) => {
  const { idUser } = req.params;
  const { totalPrice } = req.body

  Order.findOne({
    where: {
      client_id: idUser
    }
  }).then(c => {

    if (!c) {
      Order.create({
        idUser,
        totalPrice,
        status: 'on_cart'
      })
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
});

//

// FALTA TERMINAR.
