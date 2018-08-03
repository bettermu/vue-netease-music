<template>
  <transition name="slide">
    <div class="music-list">rank详情页{{$route.params.id}}</div>
  </transition>

</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "~common/scss/variable";
@import "~common/scss/mixin";
.slide-enter-active, .slide-leave-active {
  transition: all 0.2s
}
.slide-enter, .slide-leave-to {
  transform: translate3d(30%, 0, 0);
  opacity: 0;
}

.music-list {
  position:fixed;
  z-index:100;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: $color-background;
}

</style>

