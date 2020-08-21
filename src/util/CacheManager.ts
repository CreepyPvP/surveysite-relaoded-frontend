import store from "../store";
import { clearCacheAction, updateCacheAction } from "../actions/CacheActionCreator";

export async function loadToCache(cachePrefix: string, obj: any) {
    setTimeout(() => {
        store.dispatch(updateCacheAction(cachePrefix, obj))
    }, 2000)
}

export async function clearCache(cachePrefix: string) {
    store.dispatch(clearCacheAction(cachePrefix))
}