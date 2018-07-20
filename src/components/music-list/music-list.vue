<template>
  <transition name="slide" mode="out-in">
    <div class="music-list">这是音乐列表{{$route.params.id}}</div>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s
}

.slide-enter,
.slide-leave-to {
  transform: translate3d(30%, 0, 0);
  opacity: 0;
}

.music-list {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>

