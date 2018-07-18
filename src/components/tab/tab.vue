<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span>排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span>歌手</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "common/scss/variable.scss";
.tab {
  display:flex;
  line-height:1.375rem;
  height:1.375rem;
  width:100%;
  font-size:$font-size-medium;
  background: $color-theme;
  .tab-item {
    flex:1;
    text-align:center;
    color:$color-text-lm;
    span {
      padding-bottom:.09375rem
    }
    &.router-link-active {
      span {
        font-weight:bold;
        color:$color-text-l;
        border-bottom:.0625rem solid $color-text-l;
      }
    }
  }
}

</style>
