<template>
  <div>
    <div class="search">
      <input v-model="keywordRef" class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <div class="search-content" ref="searchRef" v-show="keywordRef">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of listRef"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li  class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {computed, onMounted, ref, watch} from "vue"
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const searchRef = ref(null)
    let keywordRef = ref('')
    const listRef = ref([])
    let timer = null
    let hasNoData = computed(() => {
      return !listRef.value.length
    })

    watch(keywordRef,(keyword, oldKeyword) => { // 节流函数
      console.log(keyword)
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      if (!keyword) { // 搜索框没有数据，搜索列表不展示
        listRef.value = []
        return
      }
      timer = setTimeout(() => {
        const result = []
        for (let i in props.cities) {
          props.cities[i].forEach((value) => {
            if (value.spell.indexOf(keyword) > -1 ||
                value.name.indexOf(keyword) > -1) {
              result.push(value)
            }
          })
        }
        listRef.value = result
      }, 100)
    })

    function handleCityClick (city) {
      store.commit('changeCity', city)
      router.push('/')
    }

    onMounted(() =>{
      new BScroll(searchRef.value, {click: true})
    })
    return {
      keywordRef,
      listRef,
      hasNoData,
      handleCityClick,
      searchRef
    }
  },
  updated () {
    this.scroll && this.scroll.refresh()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
      line-height: .62rem
      padding-left .2rem
      background-color #fff
      color #666
</style>
