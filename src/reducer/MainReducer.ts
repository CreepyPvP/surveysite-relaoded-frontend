import { combineReducers } from 'redux'
import AuthenticationReducer from './AuthenticationReducer'

const mainReducer = combineReducers({
    authentication: AuthenticationReducer
});

export default mainReducer;