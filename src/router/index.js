import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import Cart from '../components/Cart.vue'
import Order from '../components/Order.vue'
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
    component: Order
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
