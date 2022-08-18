export interface TUserLoginResponse {
    data: TUserData
}

export interface TUserData {
    username: string
    email: string
    userId: string
    token: string
    refreshToken: string
    message: TMessage
}

export interface TMessage {
    hostName: string
    status: string
    timeTaken: string
    count: string
    errorLog: TErrorLog[]
}

export interface TErrorLog {
    status: string
    trace: string
    rootCause: string
}
