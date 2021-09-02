const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('hackaton', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


sequelize
.authenticate()
.then(()=>{
    console.log('conection has been established susccesfuully'
    );

})
.catch(err=>{
console.error('erro na conexao da base de dados')
});


  module.exports = sequelize