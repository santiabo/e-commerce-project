const server = require("express").Router();
const { User } = require("../db.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { isUser, isAdmin } = require('../middlewares/auth')
const { DB_SECRET } = process.env;
const secretGoogle = process.env.GOOGLE_CLIENT_SECRET;

server.get("/me", isUser, async (req, res, next) => {
  try {
    const { id } = req.user;
    const result = await User.findByPk(id);
    res.json(result);
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
    else return res.send({ token: jwt.sign(user, DB_SECRET), user });
  })(req, res, next);
});

//------Promote turns user with ID: id to Admin.
server.post('/promote/:id', isAdmin, async function (req, res, next) {
  const { id } = req.params;
  try {
    const result = await User.findByPk(id)
    result.update({
      isAdmin: true
    }); res.send('User role changed to Admin')
  } catch (error) {
    next(error);
  }
});

server.get('/login/google',
  (passport.authenticate("google", {
    scope: ["profile", "email"],
  })
  ));

  server.get("/login/google/callback", (req, res, next) => {
    passport.authorize('google', function (err, user) {
      if(err) return next(err);
      if(!user) {
        res.redirect('http://localhost:5000/sign-in?error=401');
      } else {
        const token = jwt.sign({ uid: user.id, role: user.role }, secretGoogle);
        res.redirect(`http://localhost:5000/sign-in?token=${token}`);
        console.log(user);
      }
    })(req, res, next);
  })

module.exports = server;