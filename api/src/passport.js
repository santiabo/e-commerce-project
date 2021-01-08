const passport = require("passport");
//la LocalStrategy es la que se utiliza cuando no utilizamos servicios como Google para loguerse
const LocalStrategy = require("passport-local").Strategy;
const BearerStrategy = require("passport-http-bearer").Strategy;
const { User } = require("./db.js");
const jwt = require("jsonwebtoken");
const { DB_SECRET } = process.env;

//es un midlleware
passport.use(
  //esta instancia recibe dos parametros:un objeto con las opciones y un cb
  new LocalStrategy(
    //el session false es porque vamos a utilizar JWT
    { usernameField: "email", passwordField: "password", session: false },
    //el callback verifica que el usuario exista en el servidor
    async (email, password, done) => {
      //busca en la db si existe el email
      const user = await User.findOne({ where: { email: email } });
      //el done recibe tres argumentos: first error, el usuario, y un mensaje
      //si no hay usuario el error es null, el usuario es false, y el mensaje es optativo
      if (!user) return done(null, false,'User not found');
      //si encuentra al usuario compara la contraseña
      //si la contraseña es incorrecta retorno lo mismo que si no encontrara el usuario

      if (!user.compare(password)) return done(null, false,'Password is incorrect');
      //si esta todo ok devolvemos el usuario
      //la manera en que sequelize devuelve el usuario es incompatible con JWT
      //por lo debemos extraer los datos que necesitamos y enviarlos por fuera de la instancia de sequelize
      if(user.isBanned) return done(null, false, 'User Banned');
      const {
        id,
        email: userEmail,//utilizo un alias porque viene por parametro el email(no se podria redefinir)
        isAdmin,
        avatar,
        firstName,
        lastName,
        birthdate,
        photoURL,
      } = user;
      return done(null, {
        id,       
        email: userEmail,
        isAdmin,
        avatar,
        firstName,
        lastName,
        birthdate,
        photoURL,
      });
    }
  )
);

//estrategia para verificar si el token es valido
passport.use(
  new BearerStrategy((token, done) => {
    jwt.verify(token, DB_SECRET, function (err, user) {
      if (err) return done(err);
      //si el usuario existe constestamos user y sino contestamos false
      return done(null, user ? user : false);
    });
  })
);

module.exports = passport;
