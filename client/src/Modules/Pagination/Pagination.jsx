import './pagination.css'

export default function  Pagination ({postsPerPage, totalpost, paginate}){

  //numero de pagina que al principio sera solo una matriz vacia

  console.log('postsPerPage',postsPerPage)
  console.log('totalPosts',totalpost)
  console.log('paginate',paginate)

  const pageNumbers = [];
   
   for (let i = 1; i <= Math.ceil(totalpost/postsPerPage) ; i++) {
       pageNumbers.push(i)
       
   }

   return (
       <nav>
           <ul className="cen">
             {
                 pageNumbers.map(number => (
                     <li className="nums">
                     
                         <a onClick={()=> paginate(number)}>{number}</a>
                     </li>
                 ) )
             }
           </ul>
       </nav>
   )
}