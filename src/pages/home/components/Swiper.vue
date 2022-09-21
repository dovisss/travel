<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" >
        <img class="swiper-img" :src="item.picList[0].picUrl" @click="clkItem(item.id)"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>



  </div>
</template>

<script>
import {computed, nextTick, reactive} from "vue";
import {useRouter} from "vue-router";
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  setup(props) {
    const route = useRouter()
    const swiperOption = {
      pagination: '.swiper-pagination',
      paginationClickable :true,
      loop: true,
      autoplay: 2000,
      autoplayDisableOnInteraction: false,
    }
    let showSwiper = computed(() => props.list.length)
    function clkItem(id) {
      route.push({
        path: '/detail/'+ id
      })
    }

    return {swiperOption, showSwiper, clkItem}
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper>>>.swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%
    background: #eee
    .swiper-img
      width: 100%

</style>
