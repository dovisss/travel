import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home' // '@/pages/home/Home'
import City from '../pages/city/City'

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
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
