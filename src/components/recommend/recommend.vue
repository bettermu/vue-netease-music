<template>
  <div class="recommend">
    <slider :banner="banner"></slider>
    <div class="recommend-list">
      <h1 class="title">推荐歌单</h1>
      <ul>
        <li class="item">
          <div class="icon">
            <div class="gradients"></div>
            <img src="../../common/image/default.jpg" alt="">
          </div>
          <p class="play-count">
            <i class="fa fa-headphones"></i>
            10000万
          </p>
          <div class="text">
            <p class="name">我是哈哈</p>
          </div>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import { getBanner } from 'api/recommend'

export default {
  data() {
    return {
      banner: []
    }
  },
  created() {
    this._getBanner()
  },
  methods: {
    _getBanner() {
      getBanner().then((res) => {
        this.banner = res.data.banners
      })
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
.recommend {
  position:fixed;
  width:100%;
  top:2.75rem;
  bottom:0;
  z-index:100;
  .recommend-list {
    position:relative;
    box-sizing:border-box;
    width:100%;
    text-align:center;
    .title {
      height:2.03125rem;
      line-height:2.03125rem;
      padding-left:1.5%;
      text-align:left;
      font-size:$font-size-medium;
      font-weight:bold;
      color:$color-text;
    }
    .item {
      display:inline-block;
      position:relative;
      box-sizing: border-box;
      width:33%;
      padding:0 1%;
      .icon {
        position:relative;
        display:inline-block;
        width:100%;
        margin-bottom:.15625rem;
        .gradients {
          position:absolute;
          top:0;
          width:100%;
          height:1.09375rem;
          border-radius:.09375rem;
          background:linear-gradient(rgba(109,109,109,.4),rgba(255,255,255,0));
        }
        img {
          width:100%;
          height:100%;
          border-radius: .09375rem;
        }
      }
      .play-count {
        position:absolute;
        top: .15625rem;
        right:.25rem;
        font-size:$font-size-small-s;
        color:$color-text-l;
      }
      .text {
        float:left;
        line-height:.5rem;
        text-align:left;
        height:1.25rem;
        line-height:.5rem;
        overflow:hidden;
        margin-bottom:10px;
        font-size:$font-size-small;
      }
    }
  }
}
</style>
