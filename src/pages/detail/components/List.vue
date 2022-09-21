<template>
  <div>
    <div class="intro">
      <p>
        <span class="b">&nbsp;|</span>
        购票政策
      </p>
      <p class="intro-info-p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content.coupon }}</p>
    </div>
    <div>
      <p>
        <span class="b">&nbsp;|</span>
        售票时间
      </p>
      <p class="intro-info-p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content.opentime }}</p>
    </div>
    <div>
      <p>
        <span class="b">&nbsp;|</span>
        注意
      </p>
      <p class="intro-info-p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content.attention }}</p>
    </div>
    <div>
      <p>
        <span class="b">&nbsp;|</span>
        景点简介
      </p>
      <p class="intro-info-p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content.content }}</p>
    </div>
  </div>
</template>

<script>
import {onUpdated} from "vue";

export default {
  name: 'DetailList',
  props: {
    content: Object,
    demo: Object
  },
  // setup(props) {
  //   onUpdated(() =>{
  //     console.log(props.content)
  //   })
  // }
}
</script>

<style lang="stylus" scoped>
.intro
  margin: 8px 0;
.b
  color #00bcd4
  font-weight bolder
.intro-info-p {
  font-size: 14px;
  color: #666;
  margin: 8px 0;
  line-height: 24px;
}
</style>
