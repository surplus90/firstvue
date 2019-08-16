import Vue from 'vue'
import Router from 'vue-router'
import St1 from './views/St1.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      redirect:'/1st',
    },
    {
      path: '/1st',
      name: '1st',
      component: St1
    },
    {
      path: '/2st',
      name: '2st',
      component: () => import(/* webpackChunkName: "st2" */ './views/St2.vue')
    },
    {
      path: '/3st',
      name: '3st',
      component: () => import(/* webpackChunkName: "st3" */ './views/St3.vue')
    }
  ]
})
