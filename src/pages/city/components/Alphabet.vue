<template>
  <div>
    <ul class="list">
      <li
        class="item"
        v-for="item of letters"
        :key="item"
        :ref="elem => elems[item] = elem"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import {computed, onUpdated, ref} from "vue";

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  setup(props, context) {
    let touchStatus = false
    let startY = 0
    let timer = null
    const elems = ref([])
    const letters = computed(() =>{
      const letters = []
      for (let i in props.cities) {
        letters.push(i)
      }
      return letters
    })

    onUpdated(() => {
      startY = elems.value['A'].offsetTop
    })

    function handleLetterClick (e) {
      context.emit('change', e.target.innerText)
    }

    function handleTouchStart () {
      touchStatus = true
    }

    function handleTouchMove (e) {
      if (touchStatus) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - startY) / 20)
          if (index >= 0 && index < letters.value.length) {
            context.emit('change', letters.value[index])
          }
        }, 8)
      }
    }

    function handleTouchEnd () {
      touchStatus = false
    }

    return {
      elems,
      letters,
      handleLetterClick,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height: 0.4rem
      color: #00bcd4
      text-align center
</style>
