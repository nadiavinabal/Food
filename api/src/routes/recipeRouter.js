const axios = require('axios');
const { Op } = require("sequelize");
var uuid = require("node-uuid");

//const KEY_API = process.env.KEY_API;
//const KEY_API = '5b960a352d004fd583470057fc523912'
//const KEY_API = 'a825fa7578a44980aacd281e1aa2b62d'
//const KEY_API = 'ef3fa679a07c43238ff432e9a7300778'
//const KEY_API = '30376513e5fb4cd395c1c52a317ccf38'
//const KEY_API = 'aa4df6e558914e70881c5411170972ef'
const KEY_API = '0e557ded675745bbbb4fefb4ce3fb4ab'
const {Recipe, Type, Diet} = require('../db');
const { v4: uuidv4 } = require('uuid');

function getAll (req,res, next) {
    const reqname = req.query.name;

    if (reqname){
        const myRecipe = Recipe.findAll({
            where: {
                title: reqname
            }
        });
        const apiRecipe = axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${reqname}&addRecipeInformation=true&apiKey=${KEY_API}`)
        Promise.all([myRecipe, apiRecipe])
        .then(result => {
           const [myRecipeR,apiRecipeR] = result;
           const response = myRecipeR.concat(apiRecipeR.data.results)
           res.send(response)
        })
        .catch((error) => next(error)) 
        
    } else {
        const myRecipe = Recipe.findAll({
            where: {
                title: reqname
            }
        });
        const apiRecipe = axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${KEY_API}`)
        Promise.all([myRecipe, apiRecipe])
        .then(result => {
           const [myRecipeR,apiRecipeR] = result;
           const response = myRecipeR.concat(apiRecipeR.data.results)
           res.send(response)
        })
        .catch((error) => next(error)) 
    }


}

function getAllRecipe100 (req,res, next) {
    const reqname = req.query.name;

    if (reqname){
        const myRecipe = Recipe.findAll({});
        const apiRecipe = axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${KEY_API}`)
        Promise.all([myRecipe, apiRecipe])
        .then(result => {
           const [myRecipeR,apiRecipeR] = result;
           const response = myRecipeR.concat(apiRecipeR.data.results)
           res.send(response)
        })
        .catch((error) => next(error)) 
        
    }


}

async function getById(req, res,next){
    const reqId = parseInt(req.params.id);
    const idreq = req.params.id

    //const reqId = parseInt(req.params.id);
    if (idreq.length > 12)
    {
        Recipe.findByPk(idreq,{include: Diet})
        .then((resut) => res.send(resut));
    
    } else {

        const myCharacter = Recipe.findAll();
        const apiCharacters = axios.get(`https://api.spoonacular.com/recipes/${reqId}/information?apiKey=${KEY_API}`)
            //recibe un arreglo de promesa
        
            Promise.all([myCharacter, apiCharacters])
             .then(result => {
                const [myCharrR,apiChaR] = result;
                const response = apiChaR.data
                res.send(response)
             })
             .catch((error) => next(error)) 
    }
  
   //
   /*if (idreq.length > 10)
   {
    Recipe.findByPk(idreq,{include: Diet})
    .then((resut) => res.send(resut));
    

   }else {
     await axios.get(`https://api.spoonacular.com/recipes/${idreq}/information?apiKey=${KEY_API}`)
     //recibe un arreglo de promesa
     /*const myRecipe = Recipe.findAll({
        where: {
            id: idreq
        }
     });*/
     /*then(response => response.json())
            .then(videogames => res.json(videogames))
            .catch(error => next(error))


   }*/
    
     // https://api.spoonacular.com/recipes/{id}/information

    
}

/*function postRecipe(req,res,next) {
    const c = req.body;
    const diets = c.diets

    console.log('guarda c',c);
    console.log('guarda diets', diets)
   /* var myRecipe = await Recipe.create({
        ...c,
        id: uuidv4()
    });
      //.then((c) => res.send(c))
      //.catch((error) => next(error)) 

    const includeDiets = await Diet.findAll(
        {where: {
            id: {
                [Op.in]: diets,
            }
        }
       }
    )
    
    await myRecipe.setDiets(includeDiets)
    console.log(myRecipe)
    res.json(myRecipe)
    res.status(200)
    */

  
 //}

/* function postRecipe(req, res){
    const recipe = req.body;
    const diets = recipe.diets;
    console.log('guardo receta', recipe)
    console.log('guardo dietas',recipe)
    const myRecipe = await Recipe.create({
        ...recipe,
        id: uuidv4()
    })
    
    /*const includeDiets = await Diet.findAll(
        {
            where: {
                id: {
                    [Op.in]: diets,
                }
            }
        }
    )

    await myRecipe.setDiets(includeDiets)
    res.json(myRecipe)
    res.status(200)
  */
  /*  const includeDiet = await Diet.findAll({
        where: { id: {
            [Op.in]: diets
        } }
    })

    console.log('guarda relacion 1', myRecipe)
    console.log('guarda relacion dieta', includeDiet)
    //await myRecipe.setDiets(includeDiet);
    //return res.json(myRecipe);
 }*/





module.exports = {
    getAll,
    getById,
    getAllRecipe100
 };
