import axios from 'axios'

const GET_HOME_QUOTE = 'GET_HOME_QUOTE'
const ADD_HOME_QUOTE = 'ADD_HOME_QUOTE'
const EDIT_HOME_QUOTE = 'EDIT_HOME_QUOTE'
const DELETE_HOME_QUOTE = 'DELETE_HOME_QUOTE'

const initialState = {
    data: null, 
    loading: false
}

export default function(state = initialState, action) {
    let {type, payload} = action

    switch(type) {
        case GET_HOME_QUOTE + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case GET_HOME_QUOTE + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case GET_HOME_QUOTE + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

        case ADD_HOME_QUOTE + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case ADD_HOME_QUOTE + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case ADD_HOME_QUOTE + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

            case EDIT_HOME_QUOTE + '_PENDING':
                return {
                    ...state, 
                    loading: true
                }
            case EDIT_HOME_QUOTE + '_FULFILLED':
                return {
                    ...state,
                    data: payload.data,
                    loading: false
                }
            case EDIT_HOME_QUOTE + '_REJECTED':
                return {
                    ...state, 
                    loading: false
                }

        case DELETE_HOME_QUOTE + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case DELETE_HOME_QUOTE + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case DELETE_HOME_QUOTE + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

        default:
            return state
    }
}


export function getHomeQuote(quoteInfo) {
    return {
        type: GET_HOME_QUOTE,
        payload: axios.post('/api/homeS', quoteInfo)
    }
}

export function addHomeQuote(quoteInfo) {
    return {
        type: ADD_HOME_QUOTE,
        payload: axios.post('/api/homeS', quoteInfo)
    }
}

export function editHomeQuote(quoteInfo) {
    return {
        type: EDIT_HOME_QUOTE,
        payload: axios.post('/api/homeS/:id', quoteInfo)
    }
}

export function deleteHomeQuote(quoteInfo) {
    return {
        type: DELETE_HOME_QUOTE,
        payload: axios.post('/api/homeS/:id', quoteInfo)
    }
}