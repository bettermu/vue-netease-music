<template>
  <transition name="slide" mode="out-in">
    <div class="music-list">
      <div class="header" ref="header">
        <div class="back" @click="back">
          <i class="fa fa-angle-left"></i>
        </div>
        <div class="text">
          <h1 class="title">{{headerTitle}}</h1>
        </div>
      </div>
      <scroll class="list"
      @scroll="scroll"
      :probe-type="probeType"
      :listen-scroll="listenScroll"
      :data="listDetail"
      ref="list">
        <div class="music-list-wrapper">
        <div class="bg-image" :style="bgStyle" ref="bgImage">
          <div class="filter"></div>
          <div class="text">
            <h2 class="list-title">{{title}}</h2>
            <p class="play-count" v-if="playCount">
              <i class="fa fa-headphones"></i>
              {{playCount}}
            </p>
          </div>
        </div>
        <div class="song-list-wrapper">
          <div class="sequence-play" v-show="listDetail.length">
            <i class="iconfont icon-bofangicon"></i>
            <span class="text">播放全部</span>
            <span class="count">(共{{listDetail.length}}首)</span>
          </div>
          <song-list :songs="listDetail"></song-list>
        </div>
      </div>
      </scroll>

      <div v-show="!listDetail.length" class="loading-content">
        <loading></loading>
      </div>
    </div>
  </transition>
</template>

<script>
import Scroll from "base/scroll/scroll";
import SongList from "base/song-list/song-list";
import Loading from "base/loading/loading";
import { getRecommendListDetail } from "api/recommend";
import { ERR_OK } from "common/js/config";
import { createRecommendListSong } from "common/js/song";
import { mapGetters } from "vuex";

const RESERVED_HEIGHT = 44;

export default {
  data() {
    return {
      listDetail: [],
      scrollY: 0,
      headerTitle: "歌单"
    };
  },
  created() {
    //console.log(this.musicList.id);
    this._getRecommendListDetail(this.musicList.id);
    this.probeType = 3;
    this.listenScroll = true;
  },
  mounted() {
    //获取图片元素高度
    this.imageHeight = this.$refs.bgImage.clientHeight;
    this.minTranslateY = -this.imageHeight + RESERVED_HEIGHT;
  },
  computed: {
    playCount() {
      if (!this.musicList.playCount) {
        return;
      }
      if (this.musicList.playCount < 1e5) {
        return Math.floor(this.musicList.playCount);
      } else {
        return Math.floor(this.musicList.playCount / 10000) + "万";
      }
    },
    bgStyle() {
      return `background-image:url(${this.musicList.picUrl})`;
    },
    title() {
      return this.musicList.name;
    },
    ...mapGetters(["musicList"])
  },
  methods: {
    //返回
    back() {
      this.$router.back();
    },

    //滚动监听
    scroll(pos) {
      //获取滚动距离
      this.scrollY = pos.y;
    },

    _getRecommendListDetail(id) {
      //console.log(id)
      if (!id) {
        this.$router.push("/recommend");
        return;
      }
      //请求
      getRecommendListDetail(id).then(res => {
        if (res.status === ERR_OK) {
          console.log(res.data);
          this.listDetail = res.data.playlist.tracks.map(item => {
            return createRecommendListSong(item);
          });
        } else {
          console.error("getRecommendListDetail 获取失败");
        }
      });
    }
  },
  //监听
  watch:{
    //监听滚动距离变量
    scrollY(newY){
      //透明度变化百分比
      const percent=Math.abs(newY/this.imageHeight)
      if(newY<(this.minTranslateY+RESERVED_HEIGHT-20)){
        this.headerTitle=this.musicList.name
      }else{
        this.headerTitle='歌单'
      }

      if(newY<0){
        this.$refs.header.style.background=`rgba(212, 68, 57, ${percent})`
      }else{
        this.$refs.header.style.background = `rgba(212, 68, 57, 0)`
      }
    }
  },
  components: {
    Loading,
    Scroll,
    SongList
  }
};
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s;
}

.slide-enter,
.slide-leave-to {
  transform: translate3d(30%, 0, 0);
  opacity: 0;
}

.music-list {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 1.375rem;
    color: #fff;
    z-index: 100;
    .back {
      position: absolute;
      top: 0;
      left: 0.125rem;
      .fa-angle-left {
        padding: 0.15625rem 0.3125rem;
        font-size: 0.9375rem;
      }
    }
    .text {
      position: absolute;
      left: 1.1875rem;
      line-height: 1.375rem;
      font-size: $font-size-medium-x;
      @include no-wrap();
    }
  }
  .list {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: $color-background;
    .music-list-wrapper {
      .bg-image {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 75%;
        transform-origin: top;
        background-size: cover;
        background-position: 0 30%;
        .filter {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          opacity: 0.2;
        }
        .text {
          position: absolute;
          width: 80%;
          height: 1.25rem;
          bottom: 1.5625rem;
          left: 0.46875rem;
          color: #fff;
          .play-count {
            position: absolute;
            bottom: -0.5rem;
            font-size: $font-size-small;
          }
          .list-title {
            position: absolute;
            bottom: 0;
            font-size: $font-size-medium-x;
            line-height: 0.5625rem;
            font-weight: bold;
            letter-spacing: 0.03125rem;
          }
        }
      }
      .song-list-wrapper {
        padding: 1.28125rem 0 0.625rem 0;
        border-radius: 0.3125rem;
        position: relative;
        top: -0.625rem;
        background: $color-background;
        .sequence-play {
          position: absolute;
          // left: 8;
          top: 0px;
          display: flex;
          align-items: center;
          width: 100%;
          height: 1.25rem;
          padding-left: 0.5rem;
          border-bottom: 0.03125rem solid rgb(228, 228, 228);
          .iconfont {
            font-size: 0.5625rem;
            color: $color-text;
            padding-right: 0.4375rem;
          }
          .text {
            font-size: $font-size-medium-x;
          }
          .count {
            font-size: $font-size-medium;
            color: $color-text-g;
          }
        }
      }
    }
  }
  .loading-content {
    position: fixed;
    width: 100%;
    top: 70%;
    transform: translateY(-50%);
  }
}
</style>

