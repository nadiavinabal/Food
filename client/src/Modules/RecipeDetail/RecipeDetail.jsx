import { useState, useEffect } from 'react'

import './recipeDetail.css'
import {useDispatch, useSelector} from 'react-redux'
import {getRecipeDetail} from '../../actions/recipeActions'

export default function RecipeDetail (props){

    const IdURL = props.match.params.id
    //console.log('id',IdURL)
    
    const recipes = useSelector(state=> state.recipeDetail)
    const dispatch = useDispatch()

    useEffect(() => {
        const dispatchRecipeDetail = () => dispatch(getRecipeDetail(IdURL))
        dispatchRecipeDetail();
    }, [])

    
    //https://www.digitalocean.com/community/tutorials/js-domparser
    //let htmlContent = recipes.instructions; 
    //Primero crea una nueva instancia de DOMParser y le pasa su cadena HTML usando parseFromString ()
    //let parser = new DOMParser();
    //
    //let parsedHtml = parser.parseFromString(htmlContent, 'text/html');
    //let liElements = parsedHtml.getElementsByTagName('body')[0].innerText

    //console.log('prueba',liElements)
    //--------------RESUMEN DE PLATO--------------------------------------------------

    //let htmlResumen = recipes.summary;
    //let parse1 = new DOMParser();

    //let ResumenHtml = parse1.parseFromString(htmlResumen, 'text/html');
    //let liElements1 = ResumenHtml.getElementsByTagName('body')[0].innerText
    //console.log('prueba',liElements1)

    return (
        
    
         <div className="contenedorRec">
             {(recipes.id?.length>12)? 
                 (<img width="350px" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/2a408714881533.5628a2c10d730.jpg" alt="" />):
                 (<img className="imgDetalle" src={recipes.image} alt="" />)
            }
             
            
            <div>
              <p><b>TITULO </b>{recipes.title}</p>
              <p><b>TTIPO DE PLATO </b>{recipes.dishTypes}</p>
              <p><b>RESUMEN DE PLATO </b>{recipes.summary}</p>

              <p><b>PUNTUACION </b>{recipes.weightWatcherSmartPoints}</p>
              <p><b>PASO A PASO </b>{recipes.instructions}</p>
              <p><b>DIETAS:</b></p>
              {(recipes.id?.length>12)? 
                   (
                    recipes.diets?.map(
                        e => (<p>{e.name}</p>)
                    )
                   ):
                 (<p>{recipes.diets}</p>)
              }
          
            </div> 
          </div>
        
    )
}

/**
 [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
[ ] Resumen del plato
[ ] Puntuación
[ ] Nivel de "comida saludable"
[ ] Paso a paso
 */