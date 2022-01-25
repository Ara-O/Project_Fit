import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/Basic.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "current-link"
})

export default router