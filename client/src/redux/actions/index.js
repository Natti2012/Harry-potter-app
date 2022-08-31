import { CLEAR_PAGE, GET_CASAS, GET_CHARACTERS, GET_CHARACTERS_DETAILS, GET_LIBROS, GET_VARITAS } from "./actionTypes"
import axios from "axios";

export const  getLibros = ()=>{
return  async (dispatch)=>{
try {
    let result = await axios.get('https://appharry.herokuapp.com/libros')
    return dispatch({
        type: GET_LIBROS,
        payload: result.data
  }) 
} catch (error) {
   console.log('soy el error de las actions--> libros' , error) 
}
}
}

export const getCharacters=(page)=>{
    return async (dispatch)=>{
        try {
            console.log(page, 'page action');
          let result = await axios.get(`https://appharry.herokuapp.com/personajes?page=${page}`)
    return dispatch({
        type: GET_CHARACTERS,
        payload: result.data  
     })
        } catch (error) {
             console.log('soy el error de las actions--> characters' , error) 
        }
    }
}
export const getCharactesDetails=(id)=>{
    return async (dispatch)=>{
        try {
          let result = await axios.get(`https://appharry.herokuapp.com/personajes/${id}`)
          
    return dispatch({
        
        type: GET_CHARACTERS_DETAILS,
        payload: result.data  
     })
        } catch (error) {
             console.log('soy el error de las actions--> characters' , error) 
        }
    }
}
export const  getCasas = ()=>{
return  async (dispatch)=>{
try {
    let result = await axios.get('https://appharry.herokuapp.com/casas')
    return dispatch({
        type: GET_CASAS,
        payload: result.data
  }) 
} catch (error) {
   console.log('soy el error de las actions--> casas' , error) 
}
}
}
export const  getVaritas = ()=>{
return  async (dispatch)=>{
try {
    let result = await axios.get('https://appharry.herokuapp.com/varitas')
    return dispatch({
        type: GET_VARITAS,
        payload: result.data
  }) 
} catch (error) {
   console.log('soy el error de las actions--> varitas' , error) 
}
}
}
export function clearPage(){
    return{
        type: CLEAR_PAGE
    }
}