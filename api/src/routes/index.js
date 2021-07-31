const { Router } = require('express');
const { v4: uuidv4 } = require('uuid');
//const Recipe = require('../models/Recipe');
//const recipe = require('../models/Recipe');
const recipe = require('../models/Recipe');
const { Op } = require("sequelize");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const recipeRoute = require('./recipe');
const recipeRoute = require('./recipeRouter');
const dietRoute = require('./dietRouter')
const {Recipe, Diet} = require('../db');


const router = Router();

router.get('/todo', recipeRoute.getAllRecipe100)
router.get('/recipe', recipeRoute.getAll)
router.get('/recipe/:id', recipeRoute.getById)
router.post('/recipe', async(req,res) => {
    const recipe = req.body;
    const diets = recipe.diet;

    const myRecipe = await Recipe.create(
        {
           ...recipe,
           id: uuidv4()
        }
    ) 
    const includeDiets = await Diet.findAll(
        {where: {
            id: {
                [Op.in]: diets,
            }
        }
       }
    )

    await myRecipe.setDiets(includeDiets)
    res.json(myRecipe)
    res.status(200)

})

router.get('/diet', dietRoute.getAll)

module.exports = router;

/*
   async function postRecipe (req,res,next) {
    const recipe = req.body;
    const diets = recipe.diet;

    const myRecipe = await Recipe.create(
        {
           ...recipe,
           id: uuidv4()
        }
    ) 
    const includeDiets = await Diet.findAll(
        {where: {
            name: {
                [Op.in]: diets,
            }
        }
       }
    )
    
    await myRecipe.setDiets(includeDiets)
    res.json(myRecipe)
    res.status(200)
 }
*/
