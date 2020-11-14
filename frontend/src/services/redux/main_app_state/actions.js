import {
    CHECK_AUTH_USER,
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTH_ERROR
} from './types'

export const checkAuthenticateUser = () => {
    return {
        type: CHECK_AUTH_USER
    }
}

export const authenticateUser = ({ user }) => {
    return {
        type: AUTHENTICATED,
        payload: user
    }
}

export const unauthenticateUser = () => {
    return {
        type: UNAUTHENTICATED
    }
}

export const fetchError = error => {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}
