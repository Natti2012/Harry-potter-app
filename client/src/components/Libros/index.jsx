import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getLibros } from '../../redux/actions';
import './Libros.css'


function Libros() {
  const libros = useSelector((state) => state.libros)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLibros())
  }, [dispatch])
  return (
    <div  id='all-libros'>

      {
        libros?.map((l) => {
          return (
            <div className='cardLibros'>
            <h2 className='letra'>{l.libro}</h2>
              <div className='imagenLibro'>
                <img src={l.portada} alt={l.libro} />
              </div>
                
              <div className='libros-allDate'>

                <h4>Titulo original:</h4><h5>{l.titulo_original}</h5>
                <h4>Fecha de lanzamiento: </h4>
                <h5>{l.fecha_de_lanzamiento}</h5>
                <h4>Autora:</h4> <h5>{l.autora}</h5>
                <h4>Descripcion:</h4>
                <p>{l.descripcion}</p>
              </div>



            </div>
          )
        }

        )
      }
      < a href='#all-libros' className='btn-arriba'>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
          <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
        </svg>
      </a>
    </div>
  )
}

export default Libros