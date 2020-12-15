const {DataTypes} = require('Sequelize');

module.exports = (sequelize) => {

  sequelize.define('orderLine', {
    quantity: {
      type: DataTypes.INTEGER,
      
    },
    price: {
      type: DataTypes.DECIMAL,
    }
  });
};