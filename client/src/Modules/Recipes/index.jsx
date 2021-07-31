/*
  Imagen
Nombre
Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
*/
import { Link } from 'react-router-dom'
import './recipe.css'

export default function Recipes(props){
    console.log('propd id',props)
    return (
        
        <div>
             
           <div className="card">
             {props.image? (<img src={props.image} alt="" />):
             (<img width="350px" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/2a408714881533.5628a2c10d730.jpg" alt="" />) 
             }
             <b>TITULO: </b>
             <Link to={`/recipeDetail/${props.id}`}>{props.title}</Link>
             <p>DIETA: {
                 //console.log()
                /*(props.id?.length > 12)? (<p>{props.diets.name}</p>):*/
                 (<p>{props.diets}</p>) 
                   
               }</p>
           </div>
        </div>
    )
}