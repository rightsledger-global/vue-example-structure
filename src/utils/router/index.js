import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../../views/home/index'
import Auth from '../../views/auth/index'

const isLoggedIn = (to, from, next) => {
	if (!Vue.$cookies.get('user')) {
    return router.push({ name: 'Auth' });
  }
  return next();
}

const isNotLoggedIn = (to, from, next) => {
	if (Vue.$cookies.get('user')) {
    return router.push({ name: 'Home' });
  }
  return next();
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: isLoggedIn
  },
  {
    path: '/login',
    name: 'Auth',
    component: Auth,
    beforeEnter: isNotLoggedIn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
