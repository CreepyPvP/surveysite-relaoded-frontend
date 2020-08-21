interface ICache<T> {
    [id: number]: T 
}

type CacheReducerState<T> = {
    cache: ICache<T>
}

const initialState: CacheReducerState<any> = {
    cache: {}
}

export default function cacheReducer<T>(state: CacheReducerState<T> = initialState, action: { type: string, payload: any}, prefix: string, toId: (obj: T) => number) {
    switch(action.type) {
        case prefix + "_CLEAR":
            return Object.assign({}, state, { cache: {} });
        case prefix + "_UPDATE":
            state.cache[toId(action.payload)] = action.payload;
            const newCache = Object.assign({}, state.cache)
            return Object.assign({}, state, { cache: newCache })
        default:
            return Object.assign({}, state);
    }
}