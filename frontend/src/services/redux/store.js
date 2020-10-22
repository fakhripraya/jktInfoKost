import { createStore } from 'redux'
import userDataReducer from './main_app_state/reducers'

const store = createStore(userDataReducer);

export default store;