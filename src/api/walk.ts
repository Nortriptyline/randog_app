import { WalkApi } from "@/types"
import axios from "axios"

export const walkApi: WalkApi = {
    index: async (page: number, total: number) => {
        return await axios.get('/api/walks', {
            responseType: 'json',
            params: {
                page: page,
                total: total
            }
        })
    },

    show: async (walkId: string) => {
        const url = `/api/walks/${walkId}`
        return await axios.get(url)
    }
}