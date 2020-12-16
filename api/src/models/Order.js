const {DataTypes} = require('Sequelize');

module.exports = (sequelize) => {

  sequelize.define(
    'order',
     {
       totalPrice: {
         type: DataTypes.DECIMAL,
         allowNull:false            
    },
        status: {
        type: DataTypes.ENUM('on_cart', 'created', 'processing', 'completed', 'cancelled'),
        allowNull:false
    }
  });
};