import store from "../store";
import { clearCacheAction, updateCacheAction } from "../actions/CacheActionCreator";
import Http from "./Http";

export async function loadToCache(cachePrefix: string, obj: any) {
    setTimeout(() => {
        store.dispatch(updateCacheAction(cachePrefix, obj))
    }, 2000)
}

export async function loadObjectToCacheFromURL(cachePrefix: string, url: string) {
    const obj = Http.get(url);
    await loadToCache(cachePrefix, obj);
}

export async function clearCache(cachePrefix: string) {
    store.dispatch(clearCacheAction(cachePrefix))
}