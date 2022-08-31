import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { clearPage, getCharactesDetails } from '../../redux/actions';


import './DetailCharacter.css'

function DetailCharacter() {
  const dispatch = useDispatch()
  const details = useSelector(state => state.characterDetails)
  const { id } = useParams()
  useEffect(() => {
    dispatch(getCharactesDetails(id))
    return () => {
      dispatch(clearPage())
    }
  }, [dispatch])

  return (
    <div>
     
      <div>
        <h3></h3>


      </div>
      <div className='CardDetail'>
      <div  >
                  <h3 class="card-title letraDetail">{details.nombre}</h3>

        <div className='CardDetailContent'>
          <div className='contentDetailImg' >
            <img src={details.imagen} class="card-img" alt={details.nombre} />
          </div>
          <div className='contentDetail'>
            <div class="card-body datos ">
              
              <h4 class="card-text"><small class="text-muted">{details.fechaDeNacimiento}</small></h4>
              <div class="row">
                <h4 classname="datosdetail">Especie:</h4>
                <h4 classname="datosdetail">{details.especie}</h4>
                <h4 classname="datosdetail">Género:</h4>
                <h4 classname="datosdetail">{details.género}</h4>
                <h4 classname="datosdetail">Ascendencia:</h4>
                <h4 classname="datosdetail">{details.ascendencia}</h4>
                <h4 classname="datosdetail">Patronus:</h4>
                <h4 classname="datosdetail">{details.patronus}</h4>

                <h4 classname="datosdetail">Casa:</h4>
                <h4 classname="datosdetail">{details.casa}</h4>
              </div>
             

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetailCharacter