import { combineReducers } from 'redux'
import AuthenticationReducer from './AuthenticationReducer'
import CacheReducer from './CacheReducer'
import { UserPreview, UserProfileData } from '../dto/UserRequests';


const UserCacheReducer = (state: any, action: any) => CacheReducer<UserProfileData>(state, action, "USER", (obj: UserPreview) => obj.id);

const mainReducer = combineReducers({
    authentication: AuthenticationReducer,
    userCache: UserCacheReducer
});

export default mainReducer;