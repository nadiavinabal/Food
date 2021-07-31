import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar";
import './navBar.css'
import FilterDiet from "../FilterDiet/FilterDiet";

export default function NavBar(){
    return(
      <ul>
         <li><Link to="/Home">HENRY</Link></li>
         <li>

         </li>
         <li><Link to='/Home/CreateRecipe'>Crear Receta</Link></li>
         <SearchBar/>
         <Filter/>
         
      </ul>
    )
}