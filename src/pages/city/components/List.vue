<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wapper">
            <div class="button">{{ this.$store.state.city }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  updated () {
    this.scroll && this.scroll.refresh()
  },
  watch: {
    letter () {
      // console.log(element)
      if (this.letter) {
        const element = this.$refs[this.letter][0] // 因为是循环，所以是数组
        // console.log(element) // element是一个dom元素
        this.scroll.scrollToElement(element) // 让betterScroll滚到某个元素上
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .border-topbottom // 等同于border-topbottom:before{}
    &:before // 在元素之前插入内容。
      border-color: #ccc // 边框颜色
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height: .54rem // 行高
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      line-height: .76rem // 行高
      padding-left: .2rem
</style>
