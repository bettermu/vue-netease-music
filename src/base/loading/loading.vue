<template>
  <div class="loading">
    <img src="./loading.gif">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "~common/scss/variable";
.loading {
  width:100%;
  height:1.25rem;
  text-align:center;
  img {
    height:.75rem;
    width:.75rem;
    margin-top:.3125rem;
  }
}
</style>
