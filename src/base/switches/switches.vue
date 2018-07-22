<template>
  <ul class="switches">
    <li class="switch-item"
    v-for="(item, index) in switches"
    :key="item.id"
    :class="{'active':currentIndex===index}"
    @click="switchItem(index)">
      <span>{{item.name}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    switches: {
      type: Array
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    switchItem(index){
      this.emit('switch',index)
    }
  }

};
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
.switches {
  display:flex;
  align-items:center;
  width:7.5rem;
  margin:0 auto;
  .switch-item {
    flex:1;
    padding:.25rem;
    margin:0 .625rem;
    text-align:center;
    font-size:$font-size-medium;
    color:$color-text-l;
    border-bottom:.0625rem solid $color-theme;
    &.active {
      border-bottom:.0625rem solid $color-text-l;
      color:#fff;
    }
  }
}
</style>

