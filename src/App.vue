<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from "cp/m-header/m-header";
import Tab from "cp/tab/tab";
export default {
  data() {
    return {};
  },

  components: {
    MHeader,
    Tab
  }
};
</script>

<style lang="scss">
@import "common/scss/index.scss";
@import "swiper/dist/css/swiper.min.css";
#app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
