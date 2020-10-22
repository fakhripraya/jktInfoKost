import {
    CHECK_AUTH_USER,
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_ERROR
} from './types'

const userInitialState = {
    user: [],
    userInit: '',
    error: '',
    isLoading: false,
    isLoggedIn: false
}

const userDataReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case CHECK_AUTH_USER: return {
            ...state,
            isLoading: true
        }
        case AUTHENTICATED: return {
            ...state,
            user: action.payload,
            userInit: action.userInit,
            error: '',
            isLoading: false,
            isLoggedIn: true
        }
        case UNAUTHENTICATED: return {
            ...state,
            user: [],
            userInit: '',
            error: '',
            isLoading: false,
            isLoggedIn: false
        }
        case AUTH_ERROR: return {
            ...state,
            user: [],
            userInit: '',
            error: action.payload,
            isLoading: false,
            isLoggedIn: false
        }
        default: return state
    }
}

export default userDataReducer;