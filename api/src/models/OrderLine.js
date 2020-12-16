const {DataTypes} = require('Sequelize');

module.exports = (sequelize) => {

  sequelize.define('orderLine', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull:false,
      min: 0 

    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull:false,
      min: 0
    }
  });
};