const {DataTypes} = require('Sequelize');

module.exports = (sequelize) => {

  sequelize.define('order', {
    totalPrice: {
      type: DataTypes.DECIMAL,
      timestamp: false,
      
    },
    status: {
      type: DataTypes.ENUM('on_cart', 'created', 'processing', 'copmleted', 'canceled'),
    }
  });
};