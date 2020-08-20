import { UserFullRequest } from "../dto/UserRequests";
import { TokenRequest } from "../dto/TokenRequests";

type AuthenticationState = {
    authenticated: boolean,
    token: TokenRequest | null,
    user: UserFullRequest | null
}