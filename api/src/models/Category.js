const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('category', {
    /* id: {
        type: DataTypes.INTEGER,    El ID lo agrega sequelize.
        primaryKey: true,
        autoIncrement: true,
    }, */
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description:{
      type: DataTypes.TEXT,
    }
  });
};
