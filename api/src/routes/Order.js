const server = require('express').Router();
const { User, Order } = require('../db.js');


server.post('users/:idUser/cart', (req, res, next) => {
  const {idUser} = req.params;
  const {totalPrice, status} = req.body

  Order.create({
    idUser,
    totalPrice,
    status,
  })
    .then((order) => {
      res.send({ ...order.dataValues });
    })
    .catch(next);
});

// FALTA TERMINAR.