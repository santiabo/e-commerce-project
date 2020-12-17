const {DataTypes} = require ('Sequelize');

module.exports = (sequelize) => {
  sequelize.define('user' , {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isAlphanumeric: true,  
      len: [4,10]   // <-- Entre 4 y 10 caracteres !
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,  // <-- Valida que sea un Email.
      allowNull: false,
      unique: true,
    },
   /*  role: {
      type: DataTypes.STRING,     <-- Se va a usar después!
      allowNull: false,
    }, */
    avatar: {
      type: DataTypes.TEXT,
      isUrl: true  //   <--- Valida que sea URL.

    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true, //    <--- Sólo letras
      len: [2,40]
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false,
      isAlpha: true,
      len: [2,40]
    },
    birthdate: {
      type:  DataTypes.DATEONLY,
      allowNull: false,
      isDate: true//  <--- Sólo fechas
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [6,12],    // Más de 6 caracteres y con una mayuscula y un número al menos.
      is: ["^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"]
    },
  });
};