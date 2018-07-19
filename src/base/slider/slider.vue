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
  props:['banner'],

  mounted () {

    const mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      observer:true,
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
    width:100%;
    //height:5.15625rem;
  }
}
</style>

