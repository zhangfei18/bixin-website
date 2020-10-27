import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about from '../views/about.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/b',
        name: 'about',
        component: about
    }
]

const router = new VueRouter({
    routes
})

export default router