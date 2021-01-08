const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {


  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      isEmail: true,  // <-- Valida que sea un Email.
      allowNull: true,
      unique: true,
    },
     isAdmin: {
       type: DataTypes.BOOLEAN,  //   <-- Se va a usar después!
       allowNull: true,
     },
    avatar: {
      type: DataTypes.TEXT,
      isUrl: true  //   <--- Valida que sea URL.
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true, //    <--- Sólo letras
      len: [2, 40]
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
      len: [2, 40]
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      isDate: true//  <--- Sólo fechas (AAAA-MM-DD)
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [6, 12],    // Más de 6 caracteres y con una mayuscula y un número al menos.
      is: ["^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"],
      set(value) {//metodo de sequelize que recibe el valor del password ingresado por el usuario
        if (value) {//esto es por si el usuario no se loguea con password
          //hashea el password antes de guardarlo en la base de datos
          const salt = bcrypt.genSaltSync(10); //el salt se genera y se utiliza sin almacenarse
          const hash = bcrypt.hashSync(value, salt);//con esta funcion hasheamos el password(value)
          this.setDataValue("password", hash);//almacenamos el valor de pasword en la base de datos
        }
      },

      // get() {
      //   return () => this.getDataValue('password');
      // },
    },

    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  });


//bcrypt tiene un metodo para verificar el usuario
  //esta funcion de comparacion la agregamos al prototype del modelo User
  //no utilizamos arrow function
  User.prototype.compare = function (pass) {
    //recibe un pasword y lo compara con el almacenado en la base de datos
    return bcrypt.compareSync(pass, this.password);//retorna un valor Boleano
  };
return User;
};