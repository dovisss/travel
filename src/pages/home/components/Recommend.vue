<template>
  <div>
    <div class=title>热门推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.picList[0].picUrlSmall" />
        <div class="item-info">
          <p>
            <span class="item-name">{{item.name}}</span>
            <span class="item-star">&nbsp;{{item.star}}</span>
          </p>
          <p class="item-desc"><span class="b">地址：</span>{{item.address}}</p>
          <p class="item-desc"><span class="b">简介：</span>{{item.summary}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-name
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-star
        line-height: .54rem
        font-size: .18rem
        color: gray
      .item-desc
        font-size: .18rem
        line-height: .6rem
        color: #555
        ellipsis()
        .b
          font-weight:bold;

</style>
