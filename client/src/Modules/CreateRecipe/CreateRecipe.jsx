import './createRecipe.css'
import React, {useState, useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addRecipe} from '../../actions/recipeActions'
import {getDiet} from '../../actions/dietActions'

export default function CreateRecipe(){

    const [state, setState] = useState({
        title:'',
        summary: '',
        weightWatcherSmartPoints: '',
        healthScore: '',
        instructions: '',
        diet: []
    })

    const dietLoaded = useSelector(state => state.dietLoaded)
    const recipeLoaded = useSelector(state=> state.recipeLoaded) 
    const dispatch = useDispatch()

    useEffect(() => {
      const dispatchDiet = () => dispatch(getDiet())
      dispatchDiet();
    }, [])


    function handlerChange(e){ //se encarga de actualizar el estado
        //crea nuevo estado
        //setea el estado previo
        setState({
          ...state,
          //le paso la propiedad que cambie
          [e.target.name] : e.target.value //cuando name no es el nombre se usa corchtes
         })
     }

     const handleSelectChange = function (e) {
       //setUserSe  archInput(e.target.value);
       //setState({diet: e.target.value})
       /*const handleSelectChange = function (e) {
        var genero = body.genres.find(el => el === e.target.value)
        if(!genero && e.target.value!=='0')
            {let data=[...body.genres];
            data.push(e.target.value);
            setBody({...body, genres: data});
            console.log('estas seleccionando:'+e.target.value)
            }
        else{
            alert('El genero ya fue agregado')
        }
        
    }*/
        let DietasAgregadas=[...state.diet];
        DietasAgregadas.push(e.target.value)
        setState({...state, diet: DietasAgregadas})
        //console.log('diet', state.diet)
      //var genero = body.genres.find(el => el === e.target.value)
      //let dietasAdd=[...body.genres];
          //data.push(e.target.value);
          //setBody({...body, genres: data});
     /* if(!genero && e.target.value!=='0')
          {
          console.log('estas seleccionando:'+e.target.value)
          }
      else{
          alert('El genero ya fue agregado')
      }*/
      
  }

   /*
 
   */    
   const handlerOnSubmit = (e) => {
    e.preventDefault()
    //console.log(state)
    const {title, summary, weightWatcherSmartPoints, healthScore,instructions,diet} = state
    
    dispatch(addRecipe(title, summary, weightWatcherSmartPoints, healthScore,instructions,diet))
    // si no uso Hooks uso props.addContact(name, phone, address)
    //props por parametro en el componente
    //seteamos el estado
    setState({
        title:'',
        summary: '',
        weightWatcherSmartPoints: '',
        healthScore: '',
        instructions: '',
        diet: []
    })
    
   }

    return(
        <div className="recuadro">
         
            <h3 className="createTitulo">Crear Recetas</h3>
            <form className="divCrear" onSubmit={handlerOnSubmit}>
              <label>Nombre</label>
              <input type="text" name= 'title' onChange={handlerChange} required/>
              <label>Resumen del plato</label>
              <textarea name="summary" id="" rows="5" onChange={handlerChange} required></textarea>
              <label>Puntuación</label>
              <input name="weightWatcherSmartPoints" type="number" min="0" max="10" onChange={handlerChange}/>
              <label>Nivel de "comida saludable"</label>
              <input name="healthScore" type="number" min="0" max="10" onChange={handlerChange}/>
              <label>Paso a paso</label>
              <textarea name="instructions" rows='5' onChange={handlerChange}></textarea>
              <br/>
              <select onChange={handleSelectChange} name="selectDiet">
                {
                  dietLoaded.map((e) => 
                   
                      <option value={e.id}>{e.name}</option>
                  )
                }
             </select> 
              {
                //console.log('dietas',dietLoaded)
              }
              <br/>
              <input className="btnCrear" type="submit" value="Guardar"/>
            </form>
        
        </div>
    )
}