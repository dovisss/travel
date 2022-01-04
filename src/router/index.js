import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home' // '@/pages/home/Home'
import List from '../pages/list/List'
import aaa from  '../pages/demo/aaa'
import ab from '../pages/demo/ab'
import Demo from '../pages/demo/demo'
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
    },
    {
      path: '/ab',
      name: 'ab',
      component: ab
    },{
      path: '/aaa',
      name: 'aaa',
      component: aaa
    }
  ]
})


