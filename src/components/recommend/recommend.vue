<template>
  <div>
    <div>我是recommend</div>
    <slider :banner="banner"></slider>
    <router-view></router-view>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import { getBanner } from 'api/recommend'

export default {
  data() {
    return {
      banner: []
    }
  },
  created() {
    this._getBanner()
  },
  methods: {
    _getBanner() {
      getBanner().then((res) => {
        this.banner = res.data.banners
      })
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang="scss" scoped>

</style>
