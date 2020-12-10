const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
      name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
    },
    price:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    images:{
      type: DataTypes.ARRAY(DataTypes.STRING) // Array de URLS para las imágenes de CLOUDINARY.
    }
  });
};
