const model = require('../Database/db');
const DataTypes = require('sequelize');


const movie = model.define('movie',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:DataTypes.STRING,
    directorId:{
        type:DataTypes.INTEGER
    },
    year:DataTypes.STRING,
    point:DataTypes.DOUBLE,
    isActive:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    description:DataTypes.STRING
});

module.exports = movie;