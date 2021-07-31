//const type = require('../models/Type');
const diet = require('../models/Diet');
//const ModelCrud = require('./index');
//const ModelCrud = require('./index');
const {Recipe, Diet} = require('../db');
const { v4: uuidv4 } = require('uuid');

console.log(Diet);
//const dietController = new ModelCrud(Diet);
function getAll (req,res, next) {
      Diet.findAll()
     .then(c => res.send(c))
     .catch((error) => next(error))
}


module.exports = {
    getAll,
 };