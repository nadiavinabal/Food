/** 
  [ ] Botones/Opciones para filtrar por por tipo de dieta
[ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por puntuación
*/
import {useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {getDiet} from '../../actions/dietActions'
import {sortRecipes, filterRecipe} from '../../actions/recipeActions'
export default function Filter(){

  const [state, setState] = useState({
    busqueda:''
  })
  const dietLoaded = useSelector(state => state.dietLoaded)
  const dispatch = useDispatch()
  const recipes = useSelector(state=> state.recipeLoaded)

  const nuevo = useSelector(state=> state.recipeLoaded)

  useEffect(() => {
    const dispatchDiet = () => dispatch(getDiet())
    dispatchDiet();
  }, [])

  const handleSelectChange = function (e) {
    /*setState({
        ...state,
        //le paso la propiedad que cambie
        [e.target.name] : e.target.value //cuando name no es el nombre se usa corchtes
       })*/
       dispatch(filterRecipe(nuevo,e.target.value))
       //console.log('filtro dieta',nuevo)
}

  function handlerChange(e){ //se encarga de actualizar el estado
    //crea nuevo estado
    //setea el estado previo
    //onsole.log('valor select',e.target.value)
    dispatch(sortRecipes(e.target.value,recipes))
    /*setState({
      ...state,
      //le paso la propiedad que cambie
      [e.target.name] : e.target.value //cuando name no es el nombre se usa corchtes
     })*/


 }
  
   return (
     <div>
         <select placeholder="Select" name="busqueda" onChange={handlerChange}>
           <option  value=""> Seleccione Opcion </option>
           <option  value="alphaAsc"> A-Z </option>
           <option  value="alphaDesc"> Z-A </option>
           <option  value="scoreRating"> Rating </option>
         </select>
         <select onChange={(e) => dispatch(filterRecipe(e.target.value, recipes))}>
             <option value="">Tipo de Dieta</option>
                {
                 dietLoaded && dietLoaded.map((diet, index) => {
                 return (
                    <option key={index} value={diet.name}>{diet.name}</option>
                 )
                })
                }
        </select>
         
     </div>

   )
}


/*
const [state, setState] = useState({
        title:''
    })
    
    const recipeLoaded = useSelector(state => state.recipeLoaded)
    console.log('recipe Cargadas', recipeLoaded)
    const dietLoaded = useSelector(state => state.dietLoaded)
    const dispatch = useDispatch()

    useEffect(() => {
      const dispatchDiet = () => dispatch(getDiet())
      dispatchDiet();
    }, [])

    const handleSelectChange = function (e) {
        setState({
            ...state,
            //le paso la propiedad que cambie
            [e.target.name] : e.target.value //cuando name no es el nombre se usa corchtes
           })
   }

    return(
        <div>
            {/*select filtra tipo de dieta*/
     {/*}       <p><select onChange={handleSelectChange} name="title">
                {
                  dietLoaded.map((e) =>  
                      <option value={e.name}>{e.name}</option>
                  )
                }
             </select> </p>
             {console.log('valor filtro', state.title)}
        </div>
              )*/}

