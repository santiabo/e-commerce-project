const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      min: 0
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min: 0
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.TEXT) 
    }
  });
};