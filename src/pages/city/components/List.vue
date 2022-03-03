<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
          <div class="item border-bottom">阿坝</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
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
