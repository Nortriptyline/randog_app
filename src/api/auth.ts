import { AuthApi, LoginForm } from '@/types'
import axios from 'axios'

export const authApi: AuthApi = {
    getCsrf: async (): Promise<any> => {
        const resp = await axios.get('/sanctum/csrf-cookie')
        return resp
    },

    login: async (data: LoginForm): Promise<any> => {
        return await axios.post('/sanctum/token', data)
    },

    whoAmI: async (): Promise<any> => {
        return await axios.get('/me')
    }
}