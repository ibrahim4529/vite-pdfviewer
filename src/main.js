import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/main.css'
import 'virtual:windi-utilities.css'

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes
})
app.use(router)
app.mount('#app')
