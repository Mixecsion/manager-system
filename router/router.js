import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes= [
    {
        path:'/',
        name:'home',
        component:()=>import('../views/Home.vue'),
    },
    {
        path:'/queue',
        name:'queue',
        component:()=>import('../views/Queue.vue')
    }
   
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router