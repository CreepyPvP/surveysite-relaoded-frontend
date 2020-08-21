import { UserPreview } from "../dto/UserRequests";

export function clearUserCache() {
    return {
        type: "USER_PREVIEW_CLEAR",
        payload: {}
    }
}

export function updateUserCachePreview(userPreview: UserPreview) {
    return {
        type: "USER_PREVIEW_UPDATE",
        payload: userPreview
    }
}