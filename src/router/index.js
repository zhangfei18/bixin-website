import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import loadPage from '../views/loadPage.vue'
import noviceCollege from '../views/noviceCollege.vue'
import study from '../views/study.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/load',
        name: 'loadPage',
        component: loadPage
    },
    {
        path: '/noviceCollege',
        name: 'noviceCollege',
        component: noviceCollege
    },
    {
        path: '/study',
        name: 'study',
        component: study
    }
]

const router = new VueRouter({
    routes
})

export default router