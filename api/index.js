//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
//const {Type} = require('../api/src/db');
const {Diet} = require('../api/src/db')
const { v4: uuidv4 } = require('uuid');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  
   var dieta1 =  Diet.create({
    id: uuidv4(),
    name: "gluten free",
  });

  
  var dieta3 =  Diet.create({
    id: uuidv4(),
    name: "Ketogenic",
  });

  /*var dieta4 =  Diet.create({
    id: uuidv4(),
    name: "Vegetarian",
  });*/

  var dieta5 =  Diet.create({
    id: uuidv4(),
    name: "lacto ovo vegetarian",
  });

 /* var dieta6 =  Diet.create({
    id: uuidv4(),
    name: "Ovo-Vegetarian",
  });*/

  var dieta7 =  Diet.create({
    id: uuidv4(),
    name: "vegan",
  });

  var dieta8 =  Diet.create({
    id: uuidv4(),
    name: "pescatarian",
  });

  var dieta9 =  Diet.create({
    id: uuidv4(),
    name: "paleolithic",
  });

  var dieta10 =  Diet.create({
    id: uuidv4(),
    name: "primal",
  });

  var dieta11 =  Diet.create({
    id: uuidv4(),
    name: "dairy free",
  });

  Promise.all([dieta1,dieta3,dieta5,dieta7,dieta8,dieta9,dieta10,dieta11])
  .then(res => {
    console.log("Tipos de Dietas precargadas");
  });
   
  });
});
