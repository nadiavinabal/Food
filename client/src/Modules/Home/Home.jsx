import NavBar from "../NavBar/NavBar";
import Recipes from "../Recipes";
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getRecipe} from '../../actions/recipeActions'

import './home.css'
import Pagination from "../Pagination/Pagination";

export default function Home(){
    const recipes = useSelector(state=> state.recipeLoaded)
     //hace lo mismo que el mapDispachToProps
     const dispatch = useDispatch()

     const [currentPage, setCurrentPage] = useState(1) // por defecto en uno porque queremos la primer paginate
     const [postsPerPage] = useState(10)//publicaciones por pagina
 
     useEffect(() => {
         const dispatchRecipeDetail = () => dispatch(getRecipe(""))
         dispatchRecipeDetail();
     }, [])

     const indexOfLastPost = currentPage * postsPerPage
     const indexOfFirstPost = indexOfLastPost - postsPerPage
     
    console.log('hola',recipes.length)
     const currentPost = recipes.slice(indexOfFirstPost,indexOfLastPost)

     const pagination = (pageNumber) => setCurrentPage(pageNumber)
     
    return(
      <div>
        <div className='cards'>
            
            {currentPost.map((c) => 
                     <Recipes 
                        key={c.id}
                        id = {c.id}
                        title={c.title}
                        image={c.image}
                        diets={c.diets}
                     />
                  )}
           
        </div>
        <Pagination 
            postsPerPage={postsPerPage}
            totalpost= {recipes.length}
            paginate={pagination}
        /> 
      </div>
    )
}

/*     {recipes.map((c) => 
                     <Recipes 
                        key={c.id}
                        title={c.title}
                        image={c.image}
                        diets={c.diets}
                     />
                  )}*/