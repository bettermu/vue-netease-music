<template>
  <div class="recommend">
    <scroll class="recommend-content" ref="scroll" :data="playList">
      <div>
        <slider :banner="banner"></slider>
        <div class="recommend-list">
          <h1 class="title">推荐歌单</h1>
          <ul>
            <li class="item" v-for="item in playList" :key="item.id">
              <div class="icon">
                <div class="gradients"></div>
                <img v-lazy="item.picUrl">
              </div>
              <p class="play-count">
                <i class="fa fa-headphones"></i>
                {{Math.floor(item.playCount / 10000 )}}万
              </p>
              <div class="text">
                <p class="name">{{item.name}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import Slider from 'base/slider/slider'
import { getBanner, getRecommendList } from 'api/recommend'
import { ERR_OK } from 'common/js/config'

export default {
  data() {
    return {
      banner: [],
      playList: [],
    }
  },
  created() {
    this._getBanner()
    this._getRecommendList()
  },
  methods: {
    _getBanner() {
      getBanner().then((res) => {
        if (res.status === ERR_OK) {
          this.banner = res.data.banners
        } else {
          console.error('banner获取失败')
        }

      })
    },
    _getRecommendList() {
      getRecommendList().then(res => {
        if (res.status === ERR_OK) {
          console.log(res.data)
          this.playList = res.data.result
        } else {
          console.error('getRecommend获取失败')
        }
      })
    },
  },
  components: {
    Slider,
    Scroll
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
.recommend {
  position: fixed;
  width: 100%;
  top: 2.75rem;
  bottom: 0;
  z-index: 100;
  .recommend-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .recommend-list {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      .title {
        height: 2.03125rem;
        line-height: 2.03125rem;
        padding-left: 1.5%;
        text-align: left;
        font-size: $font-size-medium;
        font-weight: bold;
        color: $color-text;
      }
      .item {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        width: 33%;
        padding: 0 1%;
        .icon {
          position: relative;
          display: inline-block;
          width: 100%;
          margin-bottom: .15625rem;
          .gradients {
            position: absolute;
            top: 0;
            width: 100%;
            height: 1.09375rem;
            border-radius: .09375rem;
            background: linear-gradient(rgba(109, 109, 109, .4), rgba(255, 255, 255, 0));
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: .09375rem;
          }
        }
        .play-count {
          position: absolute;
          top: .15625rem;
          right: .25rem;
          font-size: $font-size-small-s;
          color: $color-text-l;
        }
        .text {
          float: left;
          line-height: .5rem;
          text-align: left;
          line-height: .5rem;
          overflow: hidden;
          margin-bottom: 10px;
          font-size: $font-size-small;

          .name {
            width: 100%;
            overflow: hidden;
            /*text-overflow: ellipsis;  有些示例里需要定义该属性，实际可省略*/
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
}
</style>
