const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define(
    'orderLine',
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: [1] }
      }
    }
  )
}



