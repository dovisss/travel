import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home' // '@/pages/home/Home'
import List from '../pages/list/List'

Vue.use(Router)
// 当访问根路径时，
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})


