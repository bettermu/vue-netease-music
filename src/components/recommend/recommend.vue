<template>
  <div class="recommend">
    <scroll class="recommend-content" ref="scroll" :data="playList">
      <div>
        <slider :banner="banner"></slider>
        <div class="recommend-list">
          <h1 class="title">推荐歌单</h1>
          <ul>
            <li class="item" v-for="item in playList" :key="item.id" @click="selectList(item)">
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
        <div class="recommend-song">
          <h1 class="title">推荐歌曲</h1>
          <ul>
            <li class="item" v-for="item in recommendMusic" :key="item.id">
              <div class="icon">
                <img v-lazy="item.image" alt="">
              </div>
              <p class="text">{{item.name}}</p>
              <p class="singer">{{item.singer}}</p>
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
import { getBanner, getRecommendList, getRecommendMusic } from 'api/recommend'
import { createRecommendSong } from 'common/js/song'
import { ERR_OK } from 'common/js/config'

export default {
  data() {
    return {
      banner: [],
      playList: [],
      recommendMusic: [],
    }
  },
  created() {
    this._getBanner()
    this._getRecommendList()
    this._getRecommendMusic()
  },
  methods: {
    //获取banner图
    _getBanner() {
      getBanner().then((res) => {
        if (res.status === ERR_OK) {
          this.banner = res.data.banners
        } else {
          console.error('banner获取失败')
        }

      })
    },
    //获取推荐歌单列表
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
    //获取推荐歌曲列表
    _getRecommendMusic() {
      getRecommendMusic().then(res => {
        if (res.status === ERR_OK) {
          //这里回过来的数据格式，不是直接的，需要做一层转换
          // this.recommendList=res.data.result.slice(0,8)

          let list = res.data.result.map((item) => {
            return createRecommendSong(item)
          })
          console.log(list)
          this.recommendMusic = list.slice(0, 9)
        } else {
          console.error('getRecommendMusic失败')
        }
      })
    },
    //选择歌单，进入音乐列表
    selectList(item) {
      this.$router.push({
        path: `recommend/${item.id}`
      })
      console.log(item);
    },
  },
  components: {
    Slider,
    Scroll
  },
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
        height: 1.5rem;
        line-height: 1.5rem;
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
    .recommend-song {
      margin-top: --0.625rem;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      .title {
        height: 1.5rem;
        line-height: 1.5rem;
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
          img {
            width: 100%;
            height: 100%;
            border-radius: .09375rem;
          }
        }
        .text {
          line-height: .5rem;
          text-align: left;
          height: .5rem;
          @include no-wrap();
          font-size: $font-size-small;
        }
        .singer {
          line-height: .5rem;
          margin-bottom: .3125rem;
          text-align: left;
          @include no-wrap();
          font-size: $font-size-small;
          color: $color-text-g;
        }
      }
    }
  }
}
</style>
