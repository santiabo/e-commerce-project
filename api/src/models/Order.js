const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define(
    'order',
    {
      total: {
        type: DataTypes.DECIMAL,

      },
      status: {
        type: DataTypes.ENUM('on_cart', 'confirmed', 'processing', 'completed', 'cancelled', 'send', 'delivered'),
        allowNull: false
      }
    });
};
