<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  props: {
    banner: {
      type: Array,
      defalut: null
    }
  },
  methods: {
    selectBanner(item) {
      let regHttp=/^http/
      let regSong=/\/song\?id/
      //如果是网页
      if(regHttp.test(item.url)){
        window.open(item.url)
      }

    }
  },

  mounted() {
    const mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
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
  height: 5.15625rem;
  width: 100%;
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
      ;
    }
  }
}
</style>

