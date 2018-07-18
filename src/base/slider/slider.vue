<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../common/image/default.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../common/image/default.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../common/image/default.jpg" alt="">
        </div>
      </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  mounted () {
    const mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true
    })
  }
}
</script>

<style lang="scss" scoped>
  @import 'swiper/dist/css/swiper.min.css';
</style>

