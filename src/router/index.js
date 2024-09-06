import { createMemoryHistory, createRouter } from 'vue-router'
import infoPage from '@/pages/infoPage.vue'
import countPage from '@/pages/countPage.vue'
import countedPage from '@/pages/countedPage.vue'

const routes = [
    {
        path: '/',
        component: infoPage,
    },
    {
        path: '/calculation',
        component: countPage,
    },
    {
        path: '/result',
        component: countedPage,
    },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
