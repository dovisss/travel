/* eslint-disable */
<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  setup(props) {
    const swiperOption = {
      autoplay: false
    }
    const pages = computed(() => {
      const pages = []
      props.list.forEach((item, index) => { // 循环项和循环项对应的下标
        const page = Math.floor(index / 8) // 页码
        if (!pages[page]) { // 如果不存在
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    })

    return {swiperOption, pages}
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      text-align: center
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      color: $darkTextColor
      ellipsis()
</style>
