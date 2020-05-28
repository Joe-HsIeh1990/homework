import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/costom',
    name: 'Dashboard',
    component: () => import('../components/Dashboard'),
    children:[
      {
        path: 'costomshop',
        name: 'CostomShop',
        component: () => import('../views/CostomShop')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/Login')
      }
    ]
  },
  {
    path: '/administrator',
    name: 'Administrator',
    component: () => import('../components/Administrator'),
    children:[
      {
        path: 'adminshop',
        name: 'AdminShop',
        component: () => import('../views/AdminShop')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
