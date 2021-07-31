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
       dispatch(filterRecipe(recipes,e.target.value))
       //console.log('filtro dieta',nuevo)
}

   return (
     <div>
         
         <select onChange={handleSelectChange} name="title">
                {
                  dietLoaded.map((e) =>  
                      <option value={e.name}>{e.name}</option>
                  )
                }
             </select>
         
     </div>

   )
}
