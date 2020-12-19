const {DataTypes} = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('review', {
    stars: {
      type: DataTypes.ENUM("0","1","2","3","4","5"),
    
    },
    description: {
      type: DataTypes.TEXT,
    },
    
  })
};