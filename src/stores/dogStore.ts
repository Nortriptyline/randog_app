import { Dog } from "@/types";
import { defineStore } from "pinia";

interface State {
    dogs: Dog[]
}

export const useDogStore = defineStore('store', {
    state: (): State => ({
        dogs: []
    })

    // actions: 
})