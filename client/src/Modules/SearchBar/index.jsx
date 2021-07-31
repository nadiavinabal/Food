import { useState } from 'react'
import './searchBar.css'
//import {getRecipe} from '../../actions/recipeActions'
import {getRecipe} from '../../actions/recipeActions'
import {useDispatch, useSelector} from 'react-redux'
import Recipes from '../Recipes'
import { Link } from 'react-router-dom'
export default function SearchBar (props){
    const [state, setState] = useState({
        title:''
    })

    function handlerChange(e){ //se encarga de actualizar el estado
        //crea nuevo estado
        //setea el estado previo
        setState({
          ...state,
          //le paso la propiedad que cambie
          [e.target.name] : e.target.value //cuando name no es el nombre se usa corchtes
         })
     }

     const recipes = useSelector(state=> state.recipeLoaded)
     //hace lo mismo que el mapDispachToProps
     const dispatch = useDispatch()
 
   const handlerOnSubmit = (e) => {
    e.preventDefault()
    //console.log(state)
    const {title} = state
    //console.log(title)
    dispatch(getRecipe(title))
    // si no uso Hooks uso props.addContact(name, phone, address)
    //props por parametro en el componente
    //seteamos el estado
   
    
   }

    return(
        <div className="search-container">
            <form onSubmit={handlerOnSubmit}>
              <input type="text" name="title" value={state.title} onChange={handlerChange} />
              <input type="submit" value="Buscar"/>
              
            </form>
        </div>
    )
}