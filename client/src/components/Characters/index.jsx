import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getCharacters } from '../../redux/actions';
import CardCharacter from '../Card';
import Pagination from '../Pagination';


function Characters() {
  const {docs,hasPrevPage, hasNextPage,prevPage, nextPage,totalPages} = useSelector(state => state.characters)
  const personajes = useSelector(state => state.characters)
  const dispatch = useDispatch()
  const {page}= useParams()
  useEffect(() => {
    dispatch(getCharacters(page))
  },[])
  return (
    <div>
     

      <div id='inicio'>

   

   {<Pagination
   hasPrevPage= {hasPrevPage}
    hasNextPage={hasNextPage}
     page={personajes.page}
      prevPage={prevPage}
       nextPage={nextPage}
       totalPages={totalPages}
   />}
    <div className='cards'>
      {
        docs ? docs.map((p) => {
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

        ):
        <h3>Cargando..</h3>
      }
    </div>
     {<Pagination
   hasPrevPage= {hasPrevPage}
    hasNextPage={hasNextPage}
     page={personajes.page}
      prevPage={prevPage}
       nextPage={nextPage}
       totalPages={totalPages}
   />}
   </div>
   < a href='#inicio' className='btn-arriba'>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                  <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
              </a>
  
     </div>
  )
}

export default Characters