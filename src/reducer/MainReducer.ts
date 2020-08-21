import { combineReducers } from 'redux'
import AuthenticationReducer from './AuthenticationReducer'
import UserCacheReducer from './UserCacheReducer'

const mainReducer = combineReducers({
    authentication: AuthenticationReducer,
    userCache: UserCacheReducer
});

export default mainReducer;