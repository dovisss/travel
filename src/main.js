// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // ./是当前目录，就是App.vue
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
/* eslint-disable no-new */
// 定义了一个vue根实例
new Vue({
  // 挂载到id等于app的元素上（index.html上面
  el: '#app',
  router,
  store,
  components: { App }, /* ES6写法，等同于App：App。在项目里用了一个局部组件叫App。在外层Vue实例里，组件也叫APP
  App这个局部组件是从import App from './App' 导入来的 */
  template: '<App/>'
})
