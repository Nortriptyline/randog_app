import { createRouter, createWebHashHistory } from "vue-router";

import LoginPage from "@/pages/LoginPage.vue";
import LandingPage from "@/pages/LandingPage.vue"
import WalkShow from "@/pages/Walks/WalkShow.vue"
import { useWalkStore } from "./stores/walkStore";
import MyDogsPage from "./pages/Profile/MyDogs.vue";

const routes = [
    {
        path: '/landing',
        name: 'Landing',
        component: LandingPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'Register',
        component: LoginPage
    },
    {
        path: '/profile',
        children: [
            {
                path: '/dogs',
                name: 'MyDogs',
                component: MyDogsPage
            },
        ]
    },

    {
        path: '/walk/:walk',
        name: 'Walk',
        component: WalkShow,
        beforeEnter: async (to: any) => {
            await useWalkStore().show(to.params.walk)
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router