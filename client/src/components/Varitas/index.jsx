import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getVaritas } from '../../redux/actions';
import './Varitas.css'

function Varitas() {
    const dispatch = useDispatch()
    const varitas = useSelector(state => state.varitas)
    useEffect(() => {
        dispatch(getVaritas())

    }, [dispatch])
    return (
        <div>

            {
                varitas && varitas.map((v) => {
                    return (
                        <div className='allVaritas'>


                            <div className='varitas'>
                                <article className='varitasDate' >
                                    <img src={v.imagen} alt={`varita de ${v.dueño}`} />
                                    <div className='varitas-allDate'>
                                        <h4>Dueño</h4><span>{v.dueño}</span>
                                        <h4>Madera</h4><span>{v.madera}</span>
                                        <h4>Longitud</h4><span>{v.longitud}</span>
                                        <h4>Nucleo</h4><span>{v.nucleo}</span>
                                        <h4>Flexibilidad</h4><span>{v.flexibilidad}</span>
                                        <h4>Notas</h4><span>{v.notas}</span>
                                    </div>



                                </article>
                            </div>
                        </div>
                    )
                })
            }





        </div>
    )
}

export default Varitas