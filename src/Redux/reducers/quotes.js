import axios from 'axios'

const HOME_QUOTE = 'HOME_QUOTE'
const AUTO_QUOTE = 'AUTO_QUOTE'
const COMMERCIAL_QUOTE = 'COMMERCIAL_QUOTE'

const initialState = {
    data: null, 
    loading: false
}

export default function(state = initialState, action) {
    let {type, payload} = action

    switch(type) {
        case HOME_QUOTE + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case HOME_QUOTE + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case HOME_QUOTE + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

            case AUTO_QUOTE + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case AUTO_QUOTE + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case AUTO_QUOTE + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

            case COMMERCIAL_QUOTE + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case COMMERCIAL_QUOTE + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case COMMERCIAL_QUOTE + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

       

        default:
            return state
    }
}


export function sendHomeQuote(quoteInfo) {
    return {
        type: HOME_QUOTE,
        payload: axios.post('/sendQuote', quoteInfo)
    }
}

export function sendAutoQuote(quoteInfo) {
    return {
        type: AUTO_QUOTE,
        payload: axios.post('/sendQuote', quoteInfo)
    }
}

export function sendCommercialQuote(quoteInfo) {
    return {
        type: COMMERCIAL_QUOTE,
        payload: axios.post('/sendQuote', quoteInfo)
    }
}

