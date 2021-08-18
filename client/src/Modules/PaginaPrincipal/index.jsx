
import { Link } from 'react-router-dom'
import './PaginaPrincipal.css'

export default function PaginaPrincipal(){
    return(
    <div className="fondo1">
       <div>
           <button className='button'><span className="linkStart"><Link className="linkStart" to='/Home'>Ingresar</Link></span></button>
       </div>
    </div>
       
    )
}