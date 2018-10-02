import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home'
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/detail/Detail.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/city/City.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
