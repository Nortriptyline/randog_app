import { authApi } from "@/api/auth";
import { LoginForm, User } from "@/types";
import axios from "axios";
import { defineStore } from "pinia";

interface State {
    token: string | null,
    user: User | null
}

export const useAuthStore = defineStore('auth', {
    state: (): State => ({
        token: null,
        user: null
    }),

    actions: {
        login: async function (data: LoginForm) {
            const resp = await authApi.login(data).catch(error => {
                console.log(error)
            })

            this.setToken(resp.data)

            const userResp = await authApi.whoAmI().catch(error => {
                console.log(error)
            })

            this.user = userResp.data
        },

        loadStoredToken: function(): void {
            const token = sessionStorage.getItem("token")
            this.token = token
        },

        setToken: function (token: string): string {
            this.token = token
            sessionStorage.setItem("token", token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
            return token
        }
    }
})