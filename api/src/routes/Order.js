const server = require('express').Router();
const { Order } = require('../db.js');

//-------------Get All Orders
server.get('/', (req, res, next) => {
  Order.findAll()
    .then(order => {
      return res.send(order);
    }).catch(err => {
      res.send(err)
    })
})

//-------------Status Order
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

//-------------Update Order
server.put('/:id/:status', (req, res, next) => {
  const { id, status } = req.params;

  Order.update({
    status
  },
    { where: { id } }
  )
    .then(order => {
      return res.send(order);
    })
    .catch(next);
});

//-------------Get Order
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
