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
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  mounted () {
    const mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  img {
    width:11.25rem;
    height:5.15625rem;
  }
}
</style>

