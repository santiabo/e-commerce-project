const Reviews = require('../models/Reviews');

const server = require('express').Router();
const {Product, Review} = require('../db.js');

server.get('/product/:id/review', (req, res, next) => {
  //devuelve las ordenes de usuarios
  const { id } = req.params;

  Review.findAll({ //busca las reviews
    where: { id } //<-- del producto especifico
  }).then((review) => {
    return res.send(review); //devuelve las reviews
  }).catch(next);
});



module.exports = server;