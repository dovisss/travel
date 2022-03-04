<template>
  <div>
    <ul class="list">
      <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  mounted () {
    console.log(this.cities)
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
