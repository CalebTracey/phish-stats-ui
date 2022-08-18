import { TUserData } from '../schemas'

type TUserTokenResponse = {
    accessToken: string
    email: string
    id: string
}

const getLocalRefreshToken = (): string | undefined => {
    const userStorage = localStorage.getItem('user')
    if (userStorage) {
        const user = JSON.parse(userStorage)
        return user.refreshToken
    }
    return undefined
}

const getLocalAccessToken = (): string | undefined => {
    const userStorage = localStorage.getItem('user')
    if (userStorage) {
        const user = JSON.parse(userStorage)
        return user.accessToken
    }
    return undefined
}

const setUser = (data: TUserData): void => {
    const tokenResponse: TUserTokenResponse = {
        accessToken: data.token,
        email: data.email,
        id: data.userId,
    }
    localStorage.setItem('user', JSON.stringify(tokenResponse))
}

const removeUser = (): void => {
    localStorage.removeItem('user')
}

const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    setUser,
    removeUser,
}

export default TokenService
