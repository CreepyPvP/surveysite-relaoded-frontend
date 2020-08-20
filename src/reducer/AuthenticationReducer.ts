import { UserFullRequest } from "../dto/UserRequests";
import { TokenRequest } from "../dto/TokenRequests";

type AuthenticationState = {
    authenticated: boolean,
    token: TokenRequest | null,
    user: UserFullRequest | null
}

const initialState: AuthenticationState = {
    authenticated: false,
    token: null,
    user: null
}

export default function authenticationReducer(state = initialState, action: {type: string, payload: any}) {
    switch (action.type) {
        case "AUTHENTICATE": 
            return Object.assign({}, state, { 
                authenticated: true, 
                token: action.payload.token,
                user: action.payload.user 
            })
        default: 
            return Object.assign({}, state);
    }
}