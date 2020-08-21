import { combineReducers } from 'redux'
import AuthenticationReducer from './AuthenticationReducer'
import CacheReducer from './CacheReducer'
import { UserPreview } from '../dto/UserRequests';


const UserCacheReducer = (state: any, action: any) => CacheReducer<UserPreview>(state, action, "USER_PREVIEW", (obj: UserPreview) => obj.id);

const mainReducer = combineReducers({
    authentication: AuthenticationReducer,
    userCache: UserCacheReducer
});

export default mainReducer;