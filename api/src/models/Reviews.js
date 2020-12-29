const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('review', {
    stars: {
      type: DataTypes.ENUM('0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'),
      allowNull: false,
      defaultValue: '2.5'
    },
    description: {
      type: DataTypes.TEXT,
    },

  });
};