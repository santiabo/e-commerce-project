const {DataTypes} = require ('Sequelize');

module.exports = (sequelize) => {
  sequelize.define('user' , {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
   /*  role: {
      type: DataTypes.STRING,     <-- Se va a usar después!
      allowNull: false,
    }, */
    avatar: {
      type: DataTypes.TEXT,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    birthdate: {
      type:  DataTypes.DATEONLY,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};