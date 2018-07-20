<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="item in banner" :key="item.id" class="swiper-slide">
        <img :src="item.picUrl" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  props: ['banner'],

  mounted() {

    const mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      lazy: true,
      observer: true,
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  height:5.15625rem;
  width:100%;
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;;
    }
  }
}
</style>

