export type TokenRequest = {
    token: string,
    username: string,
    userId: number,
    expirationDate: Date,
    authorities: {authority: string}[]
}