import {GET_RECIPE, GET_RECIPE_DETAIL, ADD_RECIPE, FILTER_RECIPE, SORT_RECIPES} from './index'

function getRecipe (name){
   
  /*  return function (dispatch){
        //http://localhost:3001/recipe?name=pasta
        return fetch(`http://localhost:3001/recipe?name=${name}`)
            .then(response => response.json())
            .then(obj => {
                console.log('objeto',obj)
                dispatch({ type: GET_RECIPE, payload: obj });
            });
    }*/

    //console.log('entro',name)
    return function (dispatch){
        return fetch(`http://localhost:3001/recipe?name=${name}`)
            .then(response => response.json())
            .then(obj => {
                console.log('obj',obj)
                dispatch({type: GET_RECIPE, payload: obj });
            });
    }

}

function getRecipeDetail(id){
    return function (dispatch){
        dispatch({type: "LOADING"});
        return fetch(`http://localhost:3001/recipe/${id}`)
            .then(response => response.json())
            .then(obj => {
                console.log('action',obj)
                dispatch({ type: GET_RECIPE_DETAIL, payload: obj });
            });
    }

}

function sortRecipes(busqueda, recipe){
   return function (dispatch){
      const recipesArr = recipe.slice()
      if(busqueda === 'alphaAsc') recipesArr.sort((a, b) => (a.title > b.title) ? 1 : -1)
      if(busqueda === 'alphaDesc') recipesArr.sort((a, b) => (a.title > b.title) ? -1 : 1)
      if(busqueda === 'scoreRating') recipesArr.sort((a, b) => (a.spoonacularScore < b.spoonacularScore) ? 1 : -1)
      //console.log('ordenado', recipesArr)
      dispatch({
        type: SORT_RECIPES,
        payload:recipesArr
    })
   }
}

function filterRecipe(typeDiet, recipes) {
    //e.target.value, recipes
    return function (dispatch){
        //const recipesArr = recipes.slice()
       //let filteredRecipes = [...recipes]

      /* filteredRecipes.forEach(recipe => {
        if (typeof recipe.diets[0] === 'object') { //statement to set the diference between db recipes and api recipes
         for (let i = 0; i < recipe.diets.length; i++){
         if(typeof recipe.diets[i] === 'object'){
           recipe.diets[i] = recipe.diets[i].dietName;
          }
         }
        }
       })*/
       //const recipesArr = recipes.slice()
      // console.log('el que se busca',recipesArr)
       let b = [];
       //console.log('par array ',recipes)
       //console.log('par tipo filtro',typeDiet)

       //let str = typeDiet.toLowerCase();

       for (var i = 0; i < recipes.length; i++){
        if (typeof recipes[i].diets === 'object'){
            //console.log('emtra')
         for (var j = 0; j < recipes[i].diets.length; j++) {
            // console.log('compara',recipes[i].diets[j].toLowerCase(),'con',typeDiet.toLowerCase())
            //console.log('compara')
            if ((recipes[i].diets[j].toLowerCase()) === (typeDiet.toLowerCase())){
              //console.log('encontro')
              //console.log('encontro',recipes[i])
              b.push(recipes[i])
              //b = [...b, recipes[i]]
          }          
          }
          //ilteredRecipes.filter(r => r.diets.indexOf(filterType) >= 0)
        }
    
         
       }

       //let nuevo = filteredRecipes.filter(r => r.diets.indexOf(typeDiet) >= 0)
       //console.log('resultado',b)
       /*dispatch({
        type: FILTER_RECIPE,
        payload: b
       })*/
       dispatch({
        type: FILTER_RECIPE,
        payload:b
       })
         
    }
    //console.log('filterRecipe',b)
      
    
}

function addRecipe(title, summary, weightWatcherSmartPoints, healthScore,instructions, diet){
    /*return {
        type: ADD_RECIPE,
        payload : {title, summary, weigthW, healthScore,instructions}

    }*/
    
    return function (dispatch){
        const requestOptions = { //
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title, summary, weightWatcherSmartPoints, healthScore,instructions, diet})
        };
        return fetch('http://localhost:3001/recipe', requestOptions)
          .then(response => response.json())
          .then(obj => {
            console.log('devuelve',obj)
            dispatch({ type: ADD_RECIPE, payload: {
                id: obj.id,
                title: obj.title,
                summary: obj.summary,
                weightWatcherSmartPoints: obj.weightWatcherSmartPoints,
                healthScore: obj.healthScore,
                instructions: obj.instructions,
                diet: obj.diet
            } });
        });
        
    }

    
}

export {
    getRecipe,
    getRecipeDetail,
    addRecipe,
    filterRecipe,
    sortRecipes
}

/*
   export const filterRecipes = (filterType, recipes, filteredRecipes) => (
         (dispatch) => {
             filteredRecipes = [...recipes]
             console.log(recipes)
             console.log(filteredRecipes)
            filteredRecipes.forEach(recipe => {
                if (typeof recipe.diets[0] === 'object') { //statement to set the diference between db recipes and api recipes
                 for (let i = 0; i < recipe.diets.length; i++){
                if(typeof recipe.diets[i] === 'object'){
                  recipe.diets[i] = recipe.diets[i].dietName;
                }
            }
              }
            })
            
        dispatch({
            type: FILTER_RECIPES,
            payload: {
                filterType,
                filteredRecipes: filterType === "" ? recipes : filteredRecipes.filter(r => r.diets.indexOf(filterType) >= 0),
                recipes,
            }
        })
    })

*/ 