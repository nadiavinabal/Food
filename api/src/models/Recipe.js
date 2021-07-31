const {Sequelize, DataTypes } = require('sequelize');
//var {Sequelize, DataTypes} = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    //console.log('sequelize',sequelize);
   sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
   }, 
   title: {
       type: DataTypes.STRING,
       allowNull: false
   },
   summary: {  //resumen del plato
       type: DataTypes.STRING,
       allowNull: false 
   }, 
   weightWatcherSmartPoints: { //puntuacion
      type: DataTypes.INTEGER,
      allowNull: true
   },
   healthScore: { //nivel de comida saludable
       type: DataTypes.INTEGER,
       allowNull: true
   },
   instructions: { //paso a paso
       type: DataTypes.STRING,
       allowNull: true
   }
  });
};
