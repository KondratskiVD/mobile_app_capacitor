import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AuthSocial from '../views/pages/Auth/AuthSocial.vue'
import AuthEmail from '../views/pages/Auth/AuthEmail.vue'
import SignUp from '../components/SignUp.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthSocial
  },
  {
    path: '/auth-email',
    name: 'auth-email',
    component: AuthEmail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
