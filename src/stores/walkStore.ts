import { walkApi } from "@/api/walk";
import { Walk } from "@/types";
import { defineStore } from "pinia";

interface State {
    walk: Walk | null
    walks: Walk[]
}

export const useWalkStore = defineStore('walk', {
    state: (): State => ({
        walk: null,
        walks: []
    }),

    actions: {
        index: async function (page: number, total: number) {
            const resp = await walkApi.index(page, total).catch(error => {
                console.log(error)
            })

            this.walks = resp.data
        },
        show: async function(walkId: string) {
            const resp = await walkApi.show(walkId).catch(error => {
                console.log(error)
            })

            this.walk = resp.data
        },

        leavePage: function() {
            this.walk = null
        }
    }
})