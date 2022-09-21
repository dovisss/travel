<template>
  <div>
    <detail-banner
        id="banner"
        :sightName="sightNameRef"
        :bannerImg="bannerImgRef"
        :bannerImgs="galleryImgsRef"
    ></detail-banner>
    <detail-header></detail-header><!--    返回箭头图标-->
    <div class="content" id="list">
      <detail-list :content="contentRef"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
import {
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted, onUnmounted,
  onUpdated,
  reactive,
  ref,
  toRefs
} from "vue";
import {useRoute} from "vue-router"
import {useStore} from "vuex";
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  setup() {
    let _data = reactive({
      sightNameRef: '',
      bannerImgRef: '',
      galleryImgsRef: [],
      contentRef: {}
    })
    const route = useRoute()
    const store = useStore()
    let id = route.params.id
    let city = store.state.city
    async function getDetailInfo () {
      let res = await axios.get('/sight', {
        params: {
          keyword: city,
          showapi_appid: 1171347,
          showapi_sign: 'edfc802ac93a4cd88b734cb7cca1105b'
        }
      })
      let sightList = []
      if (res.status && res.data) {
        const resultList = res.data.showapi_res_body.pagebean.contentlist
        for (let item of resultList) {
          if (item.picList.length > 0) {
            sightList.push(item)
          }
        }
      }
      
      let picList =[]
      let temp
      for (let key in sightList) {
        if (sightList[key].id == id) {
          temp = sightList[key]
        }
      }
      let tempList = temp.picList
      for (let key in tempList) {
        picList.push(tempList[key].picUrl)
      }

      _data.sightNameRef = ref(temp.name)
      _data.bannerImgRef = picList[0]
      _data.galleryImgsRef = picList
      _data.contentRef = ref(temp)
    }
    onMounted (() => {
      nextTick(() => {
        document.documentElement.scrollTop = 0
      })
      getDetailInfo()
    })
    onUpdated(() => {
      document.documentElement.scrollTop = 0
   })
    return {
      ...toRefs(_data)
    }
  }
}
</script>

<style lang='stylus' scoped>
.content
  height 50rem
</style>
