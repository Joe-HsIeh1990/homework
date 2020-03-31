import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../components/Dashboard'),
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('../views/Index')
      },
      {
        path: 'aboutus',
        name: 'AboutUs',
        component: () => import('../views/AboutUs')
      },  
      {
        path: 'costomshop',
        name: 'CostomShop',
        component: () => import('../views/CostomShop')
      }
    ]
  },
  {
    path: '/administrator',
    name: 'Administrator',
    component: () => import('../components/Administrator'),
    children:
      [
        {
          path: 'adminshop',
          name: 'AdminShop',
          component: () => import('../views/AdminShop')
        },
      ]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
