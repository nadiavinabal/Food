//STORE
/*import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

//creo el store -> recibe dos cosas reducer y applyMiddleware que me permite hacer las peticiones a API
const store = createStore(
    rootReducer,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(thunk)
);

export default store; 
*/
/** 
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
); 


*/

/*
//import {createStore} from 'react-redux'
import { createStore, applyMiddleware, compose } from "redux";
//import {reducer} from './reduce';
//import {} from './reduce'
import reducer from './reduce.js'

//pregunta si existe dentro de window alguna propiedad que se llame 
//redux devtools extension, si existe la ejecuto.
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//redux dep tool
export default store

*/

import rootReducer from '../reducers';

import {createStore, applyMiddleware, compose} from "redux"
import ReduxThunk from 'redux-thunk';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));


export default store