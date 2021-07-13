import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import editProducts from '../components/EditProducts.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'About',
  //   component: About,
  // },
  {
    path: '/about',
    name: 'About',
    component: About,
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
        path: 'editcoupon',
        name: 'EditCoupon',
        component: editProducts
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
