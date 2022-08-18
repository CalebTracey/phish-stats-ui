import { api } from './api'
import TokenService from './token-service'
import { TUserLoginResponse } from '../schemas'

export type TUserDetails = {
    fullName: string
    username: string
    email: string
}
type TNewUser = {
    fullName: string
    username: string
    email: string
    password: string
}
// type TNewUserResponse = {
//     message: string
// }
type TUserLogin = {
    username: string
    password: string
}

const { removeUser, setUser } = TokenService

const userDetails = async (username: string): Promise<TUserDetails> => {
    const response = await api.get(`auth/user/${username}`)
    return response.data
}

const registerService = async (data: TNewUser): Promise<TUserLoginResponse> => {
    const response = api
        .post<TNewUser, TUserLoginResponse>(`auth/register`, data)
        .then((res) => {
            if (res) {
                console.log(res.data)
                setUser(res.data)
            }
            return res
        })
    return response
}

const loginService = async (
    details: TUserLogin
): Promise<TUserLoginResponse> => {
    const response = await api
        .post<TUserLogin, TUserLoginResponse>(`auth/login`, details)
        .then((res) => {
            if (res) {
                console.log(res.data)
                setUser(res.data)
            }
            return res
        })
    return response
}

const logoutService = (): void => {
    removeUser()
}

const AuthService = {
    userDetails,
    registerService,
    loginService,
    logoutService,
}

export default AuthService
