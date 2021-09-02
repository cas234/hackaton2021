const Sequelize= require('sequelize')
const sequelize = require('./db');
const db = require('./db');

const Places = db.define('places', {
    // Model attributes are defined here
id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
},
namePlaces:{
    type:Sequelize.STRING,
    allowNull:false,
},
city:{
    type:Sequelize.STRING,
    allowNull:false,
},
Images:{
    type:Sequelize.STRING,
    allowNull:false,
},

description:{
    type:Sequelize.STRING,
    allowNull:false,
},

});

Places.sync()


module.exports = Places;