import { CURRENT_PAGE } from './types'

export const switchPage = (pageIndex) => {
    return {
        type: CURRENT_PAGE,
        index: pageIndex
    }
}
