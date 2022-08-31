import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCasas } from '../../redux/actions';
import './Casas.css'

function Casas() {
    const dispatch = useDispatch()
    const casas = useSelector(state => state.casas)
    console.log('soy casas', casas);
    useEffect(() => {
        dispatch(getCasas())
    }, [])
    return (

        <div id='all-houses'>
            {casas && casas.map((c) => {
                return (
                    <div className='cardHouse' >
                        <h2 class="letra">{c.nombre}</h2>
                        <div className='imagenCasa'>
                            <img src={c.img} alt={c.nombre} />

                        </div>



                        <div className='caracteristicas'>
                            <h3 class="card-title">Caracteristicas:</h3>
                            <h5>Jefes:</h5>
                            <p class="card-text"><small class="text-muted">{c.caracteristicas.Jefes}</small></p>
                            <h5>Colores:</h5>
                            <p class="card-text"><small class="text-muted">{c.caracteristicas.Colores}</small></p>
                            <h5>Animal:</h5>
                            <p class="card-text"><small class="text-muted">{c.caracteristicas.Animal}</small></p>
                            <h5>Fundador:</h5>
                            <p class="card-text"><small class="text-muted">{c.caracteristicas.Fundador}</small></p>
                            <h5>Fantasma:</h5>
                            <p class="card-text"><small class="text-muted">{c.caracteristicas.Fantasma}</small></p>
                            <h5>Cualidades:</h5>
                            <p class="card-text"><small class="text-muted">{c.caracteristicas.Cualidades}</small></p>
                            <h5>Localización:</h5>
                            <p class="card-text"><small class="text-muted">{c.caracteristicas.Localización}</small></p>
                            <h5>Guardia:</h5>
                            <p class="card-text"><small class="text-muted">{c.caracteristicas.Guardia}</small></p>
                            <h5>Elemento:</h5>
                            <p class="card-text"><small class="text-muted">{c.caracteristicas.Elemento}</small></p>
                            <h5>Reliquia:</h5>
                            <p class="card-text"><small class="text-muted">{c.caracteristicas.Reliquia}</small></p>
                        </div>
                        <div className='datos'>
                            <h3 >Descripcion:</h3>
                            <p>{c.descripcion}</p>
                            <h3>Quidditch:</h3>
                            <p>{c.quidditch}</p>
                        </div>

                    </div>
                )
            })}
            < a href='#all-houses' className='btn-arriba'>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                    <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
            </a>

        </div>



    )
}

export default Casas