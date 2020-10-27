import { CURRENT_PAGE } from './types'

const homePageInitialState = {
    pageIndex: 0,
}

const homePageDataReducer = (state = homePageInitialState, action) => {
    switch (action.type) {
        case CURRENT_PAGE: return {
            ...state,
            pageIndex: action.index
        }
        default: return state
    }
}

export default homePageDataReducer;