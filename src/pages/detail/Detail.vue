<template>
  <div>
    <detail-banner :sightName="sightNameRef" :bannerImg="bannerImgRef" :bannerImgs="galleryImgsRef"></detail-banner>
    <detail-header></detail-header><!--    返回箭头图标-->
    <div class="content">
      <detail-list :list="listRef"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router"
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  setup() {
    let sightNameRef = ref('')
    let bannerImgRef = ref('')
    let galleryImgsRef = ref([])
    let listRef = ref([])
    const route = useRoute()

    async function getDetailInfo () {
      let res = await axios.get('api/detail.json?id=', {
        params:  {id: route.params.id }
      })
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        sightNameRef.value = data.sightName
        bannerImgRef.value = data.bannerImg
        galleryImgsRef.value = data.galleryImgs
        listRef.value = data.categoryList
      }
    }
    onMounted (() => {
      getDetailInfo()
    })
    return {
      sightNameRef,
      bannerImgRef,
      galleryImgsRef,
      listRef
    }
  }
}
</script>

<style lang='stylus' scoped>
.content
  height 50rem
</style>
