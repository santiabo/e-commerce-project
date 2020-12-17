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

// ---> 44 45 46 47 <-- falta terminar de armar dos get y el put

server.get('/status/:status', (req, res) => { 
  //Esta ruta puede recibir el query string "status" y deberá devolver sólo las ordenes con ese status.
//vamos a adivinar
  var status = req.params.status //query string status
  Order.findAll({ //busca todas las ordenes
    where: {
      status //que tengan este argumento especifico (un estado)
    }
  }).then((orders)=>{
    return res.send(orders) //devuelve esas ordenes
  }).catch((err)=>{
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