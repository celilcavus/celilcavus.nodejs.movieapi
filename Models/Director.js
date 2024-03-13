const model = require('../Database/db');
const DataTypes  = require('sequelize');



const director = model.define('director',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:DataTypes.STRING,
    surname:DataTypes.STRING,
   
    isActive:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    image:DataTypes
});


module.exports = director;