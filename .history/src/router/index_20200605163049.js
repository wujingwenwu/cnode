import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/home',
      name:'/'
    },
  {
    path: '/',
    name: 'sigon',
    component: () => import('../views/sigon/Sigon'),
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
      },
    ]
   

  },
  {
    path: '/sign',
    name: 'sign',
    
    component: () => import('../views/Sign')
  }
  {
    path: '/about',
    name: 'About',
    
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
