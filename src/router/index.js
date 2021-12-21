import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import daybook from '../modules/daybook/router/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
       component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/daybook',
    ...daybook
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
