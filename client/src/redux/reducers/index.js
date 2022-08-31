import { CLEAR_PAGE, GET_CASAS, GET_CHARACTERS, GET_CHARACTERS_DETAILS, GET_LIBROS, GET_VARITAS } from "../actions/actionTypes";


const initialState = {
    libros: [],
    characters: [],
    characterDetails: {},
    casas: [],
    varitas: []
}
export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_LIBROS:
            return {
                ...state, libros: payload
            }

        case GET_CHARACTERS:
            console.log('personajes', payload);
            return {
                ...state, characters: payload
            }

        case GET_CHARACTERS_DETAILS:

            return {
                ...state, characterDetails: payload
            }
        case GET_CASAS:

            return {
                ...state, casas: payload
            }
        case GET_VARITAS:

            return {
                ...state, varitas: payload
            }

        case CLEAR_PAGE: return {
            ...state,
            characterDetails: {}
        }
        default:
            return state;
    }
}