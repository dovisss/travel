<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wapper">
            <div class="button">{{ currentCity }}</div>
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
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="elem => elems[key] = elem">
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
import {useStore} from 'vuex'
import {onMounted, watch, ref} from "vue"
import {useRouter} from 'vue-router'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    let currentCity = store.state.city
    const elems = ref({})
    const wrapper = ref(null) // vue自动把wrapper元素绑定到wrapper变量了
    let scroll = null

    function handleCityClick (city) {
      store.commit('changeCity', city) // this.$store.commit('changeCity', city)
      router.push('/')
    }

    watch(() => props.letter, (letter, oldLetter) => {
      if (letter && scroll) {
        const element = elems.value[letter] // 因为是循环，所以是数组
        scroll.scrollToElement(element) // 让betterScroll滚到某个元素上
      }
    })
    onMounted(() => {
      scroll = new BScroll(wrapper.value, {
        click: true
      })
    })
    return {
      elems,
      wrapper,
      currentCity,
      handleCityClick
    }
  },
  updated () {
    this.scroll && this.scroll.refresh()
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
