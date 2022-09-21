<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
<!--    <home-icons :list="iconList"></home-icons>-->
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// CompositionAPI
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {useStore} from 'vuex'
import {reactive, toRefs, onMounted} from 'vue'
export default {
  // 组件名
  name: 'Home.vue',
  components: {
    HomeSwiper,
    HomeHeader,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup() {
    const data = reactive({
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    })
    const dataToRefs = toRefs(data)
    const store = useStore()
    const city = store.state.city

    async function getHomeInfo () {
      let res = await axios.get('/sight', {
        params: {
          keyword: city,
          showapi_appid: 1171347,
          showapi_sign: 'edfc802ac93a4cd88b734cb7cca1105b'
        }
      })
      res = res.data
      console.log(res)
      if (res.showapi_res_code == 0 && res.showapi_res_body) {
        const resultList = res.showapi_res_body.pagebean.contentlist
        let recommendList = []
        for (let item of resultList) {
          if (item.picList.length > 0) {
            recommendList.push(item)
          }
        }
        data.swiperList = recommendList.slice(0, 3)
        data.recommendList = recommendList.slice(0, 3)
        data.weekendList = recommendList
      }

      // // iconList
      // let res1 = await axios.get('/api/iconList.json')
      // if (res1.status == 200 && res1.data) {
      //   const result = res1.data
      //   data.iconList = result.iconList
      // }
    }

    onMounted(()=> {
      getHomeInfo()
    })

    return dataToRefs
  }
}
</script>

<style >

</style>
