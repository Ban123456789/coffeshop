import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import Order from '../components/Order.vue'
import CartDetail from '../components/OrderCart.vue'
import Personal from '../components/OrderPersonal.vue'
import Check from '../components/OrderCheck.vue'
import ProductDetail from '../components/ProductDetail.vue'


import Dashboard from '../views/Dashboard.vue'
import editProducts from '../components/EditProducts.vue'
import Coupon from '../components/Coupon.vue'
import Orders from '../components/Orders.vue'


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
    component: Products,
  },
  {
    path: '/detail/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    children: [
      {
        path: 'cart',
        name: 'CartDetail',
        component: CartDetail
      },
      {
        path: 'personal',
        name: 'Personal',
        component: Personal
      },
      {
        path: 'check',
        name: 'Check',
        component: Check
      },
    ]
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
      {
        path: 'orders',
        name: 'Orders',
        component: Orders
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
