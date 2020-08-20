import { Rank } from "./RankRequests";

// User for /user/me calls
export type UserFullRequest = {
    username: string,
    id: number,
    profilePictureLink: string,

    permissionRank: Rank
}


export type UserPreview = {
    username: string,
    id: number,
    profilePictureLink: string,

    permissionRank: {color: string}
}