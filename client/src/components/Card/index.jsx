import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css';
function CardCharacter({imagen, nombre,casa, id}) {
  return (
   
    <div className='card'>
    <Link to={`/character/${id}`} className='linkCard'>
    
   <div className="imagen">
    <img src={imagen}  alt="..."/>
       
   </div>
    <div className='card-date' >
      <h5>{nombre}</h5>
      <h6 >Casa :  {casa}</h6>
    
      <br/>
      <a href={`/detail/${id}`}>Mas info</a>
    </div>
    </Link>
  </div>
  
  
  )
}

export default CardCharacter