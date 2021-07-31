//import {GET_RECIPE, GET_RECIPE_DETAIL} from './actions'
import {GET_RECIPE, GET_RECIPE_DETAIL, ADD_RECIPE, GET_DIET, FILTER_RECIPE, SORT_RECIPES} from '../actions/index'
//describe el estado que va a tener el reducer
const initialState = {
    //las recetas cargadas -> muchas por eso es un arreglo
    recipeLoaded: [],
    //una sola por eso es un objeto
    recipeDetail: {},
    //para el retard de peticiones asincronicas
    loading: false,

    dietLoaded: []
  };

  export default function rootReducer(state = initialState, action){ //recibe el estado anterior y la accion a realizar
    switch(action.type){
        case GET_RECIPE:
            console.log('action',action.payload);
            return{
                ...state,
                recipeLoaded: action.payload
            };
        case GET_DIET:
                return{
                    ...state,
                    dietLoaded: action.payload
                };
        case GET_RECIPE_DETAIL:
            return {...state,
                loading: false,
                recipeDetail: action.payload};
        case ADD_RECIPE:
            return {
                ...state, 
                recipeLoaded: [...state.recipeLoaded, {...action.payload}]
            };
        case SORT_RECIPES:
            return {
                ...state,
                recipeLoaded: action.payload
            };

            case FILTER_RECIPE:
                //console.log('que trae', action.payload)
                return {
                    ...state,
                    recipeLoaded: action.payload
                };

        case 'LOADING':
            return {...state,
                loading: true}
        default:
            return state;
    }
}

/*
 case 'FILTER_RECIPES':
          //  console.log('reducers here')
          console.log(action.payload)
            return {
                ...state,
                filteredRecipes: action.payload.filteredRecipes,
                recipes: action.payload.recipes,
                filterType: action.payload.filterType
            }

*/