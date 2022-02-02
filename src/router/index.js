import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/Basic.vue'
import Advanced from '/src/pages/Advanced.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Advanced',
        name: 'Advanced',
        component: Advanced,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "current-link"
})

export default router