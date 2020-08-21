import { UserPreview, UserProfileData } from "../dto/UserRequests";

interface ICache<T> {
    [id: number]: T 
}

type CacheReducerState = {
    userPreviewCache: ICache<UserPreview>,
    userProfileCache: ICache<UserProfileData>,
}

const initialState: CacheReducerState = {
    userPreviewCache: {},
    userProfileCache: {}
}

export default function cacheReducer(state = initialState, action: { type: string, payload: any}) {
    switch(action.type) {
        case "CLEAR":
            return Object.assign({}, state, { userPreviewCache: {}, userProfileCache: {}});
        case "UPDATE_USER_PREVIEW":
            state.userPreviewCache[action.payload.id] = action.payload;
            const newUserPreviewCache = Object.assign({}, state.userPreviewCache)
            return Object.assign({}, state, { userPreviewCache: newUserPreviewCache })
        default:
            return Object.assign({}, state);
    }
}