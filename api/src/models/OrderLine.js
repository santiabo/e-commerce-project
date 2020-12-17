const { DataTypes } = require('Sequelize');

module.exports = (sequelize) => {

  sequelize.define(
    'orderLine',
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        min: 1
      }
    });
};