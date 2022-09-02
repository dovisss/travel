// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, { createApp } from 'vue';
import App from './App' // ./是当前目录，就是App.vue
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'


/* eslint-disable no-new */
// 定义了一个vue根实例
createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
