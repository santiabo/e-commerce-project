const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
    },
    price:{
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    stock:{
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    categories:{
      type: DataTypes.ARRAY(DataTypes.STRING), // Usé un Array de Strings para las diferentes Categorias.
    },
    images:{
      type: DataTypes.ARRAY(DataTypes.STRING) // Array de URLS para las imágenes de CLOUDINARY.
    }
  });
};
