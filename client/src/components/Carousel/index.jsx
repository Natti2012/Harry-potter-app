import React from 'react'
import { Link } from "react-router-dom";
import "./Carousel.css";
import sombrero from '../../images/sombrero.jpg'
import libros from '../../images/libros.jpg'
import personajes from '../../images/personajes.jpg'

function Carousel() {
  return (
    <div class="slider">
      <ul> 
         <li>
          <Link to='/quiz'>
          <img src={sombrero}  width='70%'alt="" />
          </Link>
        </li>
        <li>
            <Link to='/libros'>
          <img src={libros} width='50%' alt="" />
          </Link>
        </li>
        <li>
          <Link to='/characters/1'>
          <img src={personajes}width='50%' alt="" />
          </Link>
        </li>
      
      </ul>
    </div>
  )
}
// "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/04/10/16495856593035.jpg
export default Carousel
