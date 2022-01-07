<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import axios from 'axios'

export default {
  // 组件名
  name: 'Home.vue',
  components: {
    HomeSwiper,
    HomeHeader,
    HomeIcons,
    HomeRecommend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json') // axios返回的结果是promise对象，所以我们可以用then
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style >

</style>
