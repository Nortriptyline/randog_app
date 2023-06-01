export interface AuthApi {
    login(data: LoginForm): Promise<any>,
    getCsrf(): Promise<string>
    whoAmI(): Promise<any>
}

export interface WalkApi {
    index(page: number, total: number): Promise<any>
    show(walk: string): Promise<any>
}

export interface LoginForm {
    email: string
    password: string
    device_name: string
}

export interface User {
    id: number
    name: string
    dogs: Dog[]
}

export interface Walk {
    id: string
    title: string
    description: string
}

export interface Dog {
    id: string
    gender: boolean
    age: number
    name: string
    weight: number
    size: number
}