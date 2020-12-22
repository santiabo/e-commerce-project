const server = require('express').Router();
const { Order, OrderLine } = require('../db.js');



// ---> 44 45 46 47 <-- REVISAR CON POSTMAN!!

server.get('/status/:status', (req, res, next) => {
  //Esta ruta puede recibir el query string "status" y deberá devolver sólo las ordenes con ese status.
  //vamos a adivinar
  const status = req.params.status; //query string status

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