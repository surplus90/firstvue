import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('./views/Music.vue')
    },
    {
      path: '/css',
      name: 'css',
      component: () => import('./views/Css.vue')
    },
    {
      path: '/css2',
      name: 'css2',
      component: () => import('./views/Css2.vue')
    },
    {
      path: '/css3',
      name: 'css3',
      component: () => import('./views/Css3.vue')
    },
    {
      path: '/homework',
      name: 'homework',
      component: () => import('./views/Homework.vue')
    }
  ]
})
