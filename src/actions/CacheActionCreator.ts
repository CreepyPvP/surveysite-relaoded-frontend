import { UserPreview } from "../dto/UserRequests";

export function clearCacheAction(cachePrefix: string) {
    return {
        type: cachePrefix + "_CLEAR",
        payload: {}
    }
}

export function updateCacheAction(cachePrefix: string, obj: any) {
    return {
        type: cachePrefix + "_UPDATE",
        payload: obj
    }
}