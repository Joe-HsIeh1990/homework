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
      },
      // {
      //   path: 'costompagge',
      //   name: 'CostomPagge',
      //   component: () => import('../components/CostomPagge')
      // }
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
        {
          path:'adminorder',
          name:'AdminOrder',
          component: () => import('../views/AdminOrder')
        }
      ]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
