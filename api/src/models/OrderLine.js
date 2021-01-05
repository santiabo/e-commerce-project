const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define(
    'orderLine',
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: { min: [1] }
      }
    }
  )
}



