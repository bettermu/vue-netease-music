<template>
  <div>
    <div>我是recommend</div>
    <slider></slider>
    <router-view></router-view>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'

export default {
  components: {
    Slider
  }
}
</script>

<style lang="scss" scoped>

</style>
