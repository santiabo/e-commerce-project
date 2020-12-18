const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define(
    'order',
    {
      totalPrice: {
        type: DataTypes.DECIMAL,

      },
      status: {
        type: DataTypes.ENUM('on_cart', 'created', 'processing', 'completed', 'cancelled'),
        allowNull: false
      }
    });
};