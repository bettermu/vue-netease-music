<template>
  <div class="no-result">
    <div class="no-result-icon">
      <i class="fa fa-music"></i>
    </div>
    <p class="no-result-text">{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";

.no-result {
  text-align:center;
  .no-result-icon {
    color:$color-text-gg;
    font-size:1.5625rem;
  }
  .no-result-text {
    margin-top:.9375rem;
    font-size:$font-size-medium;
    color:$color-text;
  }
}

</style>

