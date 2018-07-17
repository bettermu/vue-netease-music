<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
  </div>
</template>

<script>
import MHeader from 'cp/m-header/m-header'
export default {
  data () {

  },

  components: {
    MHeader
  }
}
</script>

<style lang="scss">
#app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
