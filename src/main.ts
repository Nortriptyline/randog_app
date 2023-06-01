import { createApp } from 'vue'
import { createPinia } from 'pinia';

import './style.css'
import App from './App.vue'
import router from './routes'
import axios from 'axios';
import { authApi } from './api/auth';
import { useAuthStore } from './stores/authStore';

axios.defaults.baseURL = 'http://127.0.0.1'
axios.defaults.withCredentials = true

await authApi.getCsrf()

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

useAuthStore().loadStoredToken()