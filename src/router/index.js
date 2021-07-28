import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'


import Dashboard from '../views/Dashboard.vue'
import editProducts from '../components/EditProducts.vue'
import Coupon from '../components/Coupon.vue'


const routes = [
  // {
  //   path: '/',
  //   name: 'About',
  //   component: About,
  // },
  {
    path: '/',
    name: 'About',
    component: About,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'editproducts',
        name: 'EditProducts',
        component: editProducts
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: Coupon
      },
      {
        path: 'logout',
        name: 'Logout',
        component: Coupon
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
