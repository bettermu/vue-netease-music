<template>
  <div class="m-header">
    <h1 class="text">网易云音乐</h1>
    <router-link to="/user" class="mine" tag="div">
      <i class="iconfont icon-list"></i>
    </router-link>
    <router-link to="/search" class="search" tag="div">
      <i class="iconfont icon-search"></i>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'common/scss/variable.scss';
.m-header {
  position: relative;
  height: 1.375rem;
  width: 100%;
  text-align: center;
  background: $color-theme;
  .text {
    line-height:1.375rem;
    font-weight:bold;
    color: $color-text-l;
    letter-spacing: 0.0938rem;
    font-size:.5625rem;
  }
  .mine {
    position:absolute;
    top:-0.0469rem;
    left:0;
    .iconfont {
      display:block;
      padding:0.3438rem;
      font-size:0.6875rem;
      color:$color-theme-l;
    }
  }
  .search {
    position:absolute;
    top:0;
    right:0.0625rem;
    .iconfont {
      display: block;
      padding: 0.375rem;
      font-size: 0.5625rem;
      color: $color-theme-l;
    }
  }
}
</style>
