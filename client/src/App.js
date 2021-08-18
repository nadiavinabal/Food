import './App.css';
import {Switch, Route} from 'react-router-dom'
import PaginaPrincipal from './Modules/PaginaPrincipal';
import Home from './Modules/Home/Home';
import NavBar from './Modules/NavBar/NavBar';
import CreateRecipe from './Modules/CreateRecipe/CreateRecipe';
import Recipes from './Modules/Recipes';
import RecipeDetail from './Modules/RecipeDetail/RecipeDetail';
import SearchBar from './Modules/SearchBar';
import prueba from './Modules/prueba/prueba';

///Buscar/${state.title}
function App() {
  return (
    <div>
       <>
          <Route path="/" exact component={PaginaPrincipal}/>
          <Route path="/recipeDetail/:id" component={RecipeDetail}/>
          <Route path="/Home" component={NavBar}/>
          <Route path="/Home" exact component={Home}/>
          <Route path="/prueba" exact component={prueba}/>
          {/*<Route path="/Home" component={SearchBar}/>*/}
          <Route path="/Home/CreateRecipe" exact component={CreateRecipe}/>
       </>
    </div>
  );
}

export default App;
