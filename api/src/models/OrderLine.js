const { DataTypes } = require('Sequelize');

module.exports = (sequelize) => {

  sequelize.define(
    'orderLine',
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: [1]}
      },      
    },{
      validate: {
        moreThanOne(){
          if(this.quantity < 1){
            throw new Error('The quantity has to be biger than one');
          }
        }
      }
    })
    
};

