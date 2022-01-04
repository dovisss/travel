<template>
  <div>
    SSSSSSSSSSSSSSSSS

    <div>Num：{{ key }}</div>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "hhh",
  data() {
    return {
      key: '',
      msg: '',
      a: '',
      b: '',
      c: '',
      d: '',
      e: ''
    }
  },
  mounted: function () {
    console.log(222222222222222)
    console.log(this.$route.params.key)
    console.log(this.$route.params.msg) //msg test.
    console.log(this.$route.params.a)
    console.log(this.$route.params.b)
    console.log(this.$route.params.c)
    console.log(this.$route.params.d)
    console.log(this.$route.params.e)
    this.key = this.$route.params.key
    this.msg = this.$route.params.msg
    this.a = this.$route.params.a
    this.b = this.$route.params.b
    this.c = this.$route.params.c
    this.d = this.$route.params.d
    this.e = this.$route.params.e
  }
}
</script>

<style scoped>
</style>
