import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeView from './views/WelcomeView.vue'
import AppView from './views/AppView.vue'


const routes = [
    { path: '/', component: WelcomeView, name: 'welcome' },
    { path: '/app', component: AppView, name: 'app' },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})