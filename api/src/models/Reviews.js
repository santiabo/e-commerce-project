const {DataTypes} = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('review', {
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
          min: 0,
          max: 5
      }
  },
    description: {
      type: DataTypes.TEXT,
    },
    
  })
};