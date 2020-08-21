import { UserPreview } from "../dto/UserRequests";

export function clearUserCache() {
    return {
        type: "CLEAR",
        payload: {}
    }
}

export function updateUserCachePreview(userPreview: UserPreview) {
    return {
        type: "UPDATE_USER_PREVIEW",
        payload: userPreview
    }
}