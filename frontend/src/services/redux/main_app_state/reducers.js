import {
    CHECK_AUTH_USER,
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_ERROR
} from './types'

const userInitialState = {
    user: [],
    error: '',
    isPemilik: '',
    isLoggedIn: false
}

const userDataReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case CHECK_AUTH_USER: return {
            ...state,
        }
        case AUTHENTICATED: return {
            ...state,
            user: action.payload,
            error: '',
            isLoggedIn: true
        }
        case UNAUTHENTICATED: return {
            ...state,
            user: [],
            error: '',
            isLoggedIn: false
        }
        case AUTH_ERROR: return {
            ...state,
            user: [],
            error: action.payload,
            isLoggedIn: false
        }
        default: return state
    }
}

export default userDataReducer;