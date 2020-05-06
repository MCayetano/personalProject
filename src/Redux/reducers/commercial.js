import axios from 'axios'

const GET_COMMERCIAL_QUOTE = 'GET_COMMERCIAL_QUOTE'
const ADD_COMMERCIAL_QUOTE = 'ADD_COMMERCIAL_QUOTE'
const EDIT_COMMERCIAL_QUOTE = 'EDIT_COMMERCIAL_QUOTE'
const DELETE_COMMERCIAL_QUOTE = 'DELETE_COMMERCIAL_QUOTE'

const initialState = {
    data: null, 
    loading: false
}

export default function(state = initialState, action) {
    let {type, payload} = action

    switch(type) {
        case GET_COMMERCIAL_QUOTE + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case GET_COMMERCIAL_QUOTE + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case GET_COMMERCIAL_QUOTE + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

        case ADD_COMMERCIAL_QUOTE + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case ADD_COMMERCIAL_QUOTE + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case ADD_COMMERCIAL_QUOTE + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

            case EDIT_COMMERCIAL_QUOTE + '_PENDING':
                return {
                    ...state, 
                    loading: true
                }
            case EDIT_COMMERCIAL_QUOTE + '_FULFILLED':
                return {
                    ...state,
                    data: payload.data,
                    loading: false
                }
            case EDIT_COMMERCIAL_QUOTE + '_REJECTED':
                return {
                    ...state, 
                    loading: false
                }

        case DELETE_COMMERCIAL_QUOTE + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case DELETE_COMMERCIAL_QUOTE + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case DELETE_COMMERCIAL_QUOTE + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

        default:
            return state
    }
}


export function getCommercialQuote(quoteInfo) {
    return {
        type: GET_COMMERCIAL_QUOTE,
        payload: axios.post('/api/commercial', quoteInfo)
    }
}

export function addCommercialQuote(quoteInfo) {
    return {
        type: ADD_COMMERCIAL_QUOTE,
        payload: axios.post('/api/commercial', quoteInfo)
    }
}

export function editCommercialQuote(quoteInfo) {
    return {
        type: EDIT_COMMERCIAL_QUOTE,
        payload: axios.post('/api/commercial/:id', quoteInfo)
    }
}

export function deleteCommercialQuote(quoteInfo) {
    return {
        type: DELETE_COMMERCIAL_QUOTE,
        payload: axios.post('/api/commercial/:id', quoteInfo)
    }
}