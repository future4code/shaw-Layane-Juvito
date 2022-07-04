export enum userRoles {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export type authenticationData = {
    id: string,
    role: userRoles
}

export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: userRoles
}

export type userInput = {
    name: string,
    email: string,
    password: string,
    role: userRoles
}

export type userLogin = {
    email: string,
    password: string
}