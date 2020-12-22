const server = require("express").Router();
const { User } = require("../db.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { DB_SECRET } = process.env;

server.get("/me", async (req, res, next) => {
  try {
    if (req.user) {
      const { id } = req.user;
      const result = await User.findByPk(id);
      res.json(result);
    } else res.sendStatus(401);
  } catch (error) {
    next(error);
  }
});

// User log in route

server.post("/login", function (req, res, next) {
  //utilizamos el metodo de passport autenthicate
  //que recibe como primer argumento el tipo de estrategia a utilizar
  // como segundo argumento recibe una funcion autoejecutable la cual recibe: un err, user y un info
  passport.authenticate("local", function (err, user) {
    //si hay un error nos pasamos al siguiente midleware
    if (err) return next(err);
    //si no hay error nos fijamos si el usuario es nulo
    //si no esta bien autenticado arrojamos un 401(usuario no autorizado)
    //tambien podemos enviar un mensaje(optativo)
    else if (!user) return res.sendStatus(401);
    //si todo esta correcto la respuesta va a ser un body(JWT)
    //vamos a firmar un token enviando el usuario y un secreto
    else return res.send(jwt.sign(user, DB_SECRET));
  })(req, res, next);
});



module.exports = server;