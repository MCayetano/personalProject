import axios from 'axios'

const GET_AUTO_QUOTE = 'GET_AUTO_QUOTE'
const ADD_AUTO_QUOTE = 'ADD_AUTO_QUOTE'
const EDIT_AUTO_QUOTE = 'EDIT_AUTO_QUOTE'
const DELETE_AUTO_QUOTE = 'DELETE_AUTO_QUOTE'

const initialState = {
    data: null, 
    loading: false
}

export default function(state = initialState, action) {
    let {type, payload} = action

    switch(type) {
        case GET_AUTO_QUOTE + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case GET_AUTO_QUOTE + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case GET_AUTO_QUOTE + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

        case ADD_AUTO_QUOTE + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case ADD_AUTO_QUOTE + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case ADD_AUTO_QUOTE + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

            case EDIT_AUTO_QUOTE + '_PENDING':
                return {
                    ...state, 
                    loading: true
                }
            case EDIT_AUTO_QUOTE + '_FULFILLED':
                return {
                    ...state,
                    data: payload.data,
                    loading: false
                }
            case EDIT_AUTO_QUOTE + '_REJECTED':
                return {
                    ...state, 
                    loading: false
                }

        case DELETE_AUTO_QUOTE + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case DELETE_AUTO_QUOTE + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case DELETE_AUTO_QUOTE + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

        default:
            return state
    }
}


export function getAutoQuote(quoteInfo) {
    return {
        type: GET_AUTO_QUOTE,
        payload: axios.get('/api/auto', quoteInfo)
    }
}

export function addAutoQuote(quoteInfo) {
    return {
        type: ADD_AUTO_QUOTE,
        payload: axios.post('/api/auto', quoteInfo)
    }
}

export function editAutoQuote(quoteInfo) {
    return {
        type: EDIT_AUTO_QUOTE,
        payload: axios.put('/api/auto/:id', quoteInfo)
    }
}

export function deleteAutoQuote(quoteInfo) {
    return {
        type: DELETE_AUTO_QUOTE,
        payload: axios.delete('/api/auto/:id', quoteInfo)
    }
}

