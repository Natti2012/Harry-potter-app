import React, { useEffect }  from 'react'
import Carousel from '../Carousel'

import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../../redux/actions';
import CardCharacter from '../Card';
import { Link } from 'react-router-dom';
import './Home.css'
import varitas from '../../images/varitas.jpg'
import casas from '../../images/Bannercasas.jpg' 
function Home() {
  const personajes = useSelector(state => state.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacters())
  },[dispatch])
  console.log('soy los personajes', personajes)
  return (
    <div>
   
      <Carousel/>
   
       <div className='cards'>
       {
          Object.keys(personajes).length >0 && personajes.docs.slice(0,4).map((p) => {
           return (
             <div key={p.id}>
             <CardCharacter
               id={p._id}
               imagen={p.imagen}
               nombre={p.nombre}
               casa={p.casa}
 
             />
             </div>
           )
 
         }
 
         )
       }
       <Link to='/characters/1' className='btn-masPers'><button>Ver mas..</button></Link> 
     </div>
     <div>
       <Link to='/casas'>
                <img src={casas} width='60%' alt='foto casas'/>

       </Link>
     </div>
     <br/>
     <br/>
    <div>
       <Link to='/varitas'>
                <img src={varitas} width='60%' alt='foto casas'/>

       </Link>
     </div>
   </div>
  )
}

export default Home