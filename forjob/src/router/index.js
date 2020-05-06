import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/aboutus',
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
    redirect: '/administrator/adminshop',
    name: 'Administrator',
    meta: { requiresAuth: true },
    component: () => import('../components/Administrator'),
    children:
      [
        {
          path: 'adminshop',
          name: 'AdminShop',
          component: () => import('../views/AdminShop'),
          meta: { requiresAuth: true }
        },
        {
          path:'adminorder',
          name:'AdminOrder',
          component: () => import('../views/AdminOrder'),
          meta: { requiresAuth: true }
        }
      ]
  },
  {
    path: '/checkorder/:orderId',
    name: 'CheckOrder',
    component: () => import('../components/CheckOrder')
  }
 
]

const router = new VueRouter({
  routes
})

export default router
