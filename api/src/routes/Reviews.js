const server = require('express').Router();
const { Review } = require('../db.js');

server.get('/product/:id/review', (req, res, next) => {
  //devuelve las reviews del producto
  const { id } = req.params;

  Review.findAll({ //busca las reviews
    where: { id } //<-- del producto especifico
  }).then((review) => {
    return res.send(review); //devuelve las reviews
  }).catch(next);
});

server.delete('/product/:id/review/:idReview', (req, res, next) => {
  //elimina review
  const { id } = req.params;

  Review.destroy({ //destruye
    where: { id } //determinada review
  })
    .then((data) => { //una vez destruida
      if (data) return res.send({ reviewDeleted: Number(id) }); //confirma
      return res.status(404).send({ error: "Review not Found." }); //o envia un error si no la encuentra
    })
    .catch(next); 
});


module.exports = server;