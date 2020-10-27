import { combineReducers, createStore } from 'redux'
import userDataReducer from './main_app_state/reducers'
import homePageDataReducer from './home_state/reducers'

const rootReducer = combineReducers({
    userDataReducer,
    homePageDataReducer
})

const store = createStore(rootReducer);

export default store;