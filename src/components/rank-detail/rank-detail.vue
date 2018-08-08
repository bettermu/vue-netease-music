<template>
  <transition name="slide">
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
      ref="list">
        <div class="music-list-wrapper">
        <div class="bg-image" :style="bgStyle" ref="bgImage">
          <div class="filter"></div>
          <div class="text">
            <h2 class="list-title">
              {{title}}
            </h2>
            <p class="update">{{updateTime}}</p>
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
import Loading from "base/loading/loading";
import SongList from "base/song-list/song-list";
import { mapGetters } from "vuex";
import { createRecommendListSong } from "common/js/song";

const RESERVED_HEIGHT = 44;

export default {
  data() {
    return {
      listDetail: [],
      scrollY: 0,
      node: null,
      headerTitle: "歌手"
    };
  },
  created() {
    if (!this.topList.id) {
      this.$router.push("/rank");
    }

    this._normalizeSongs(this.topList.tracks);
    this.probeType = 3;
    this.listenScroll = true;
  },

  mounted() {
    this.imageHeight = this.$refs.bgImage.clientHeight;
    this.minTranslateY = -this.imageHeight + RESERVED_HEIGHT;
  },

  computed: {
    headerTitleTouchDown() {
      return this.topList.name;
    },
    bgStyle() {
      return `background-image: url(${this.topList.coverImgUrl})`;
    },
    title() {
      return this.headerTitleTouchDown;
    },
    updateTime() {
      let time = new Date(this.topList.updateTime);
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return `最近更新:${month}月${day}日`;
    },

    ...mapGetters(["topList"])
  },
  methods: {
    scroll(pos){
      this.scrollY=pos.y
    },
    back(){
      this.$router.back()
    },
    //格式化歌曲列表
    _normalizeSongs(list) {
      if (!this.topList.id) {
        this.$router.push("/rank");
        return;
      }
      let ret = [];
      list.forEach(item => {
        ret.push(createRecommendListSong(item));
      });
      this.listDetail = ret;
      console.log(ret);
    }
  },
  watch: {
    scrollY(newY) {
      // let translateY = Math.max(this.minTranslateY, newY)
      const percent = Math.abs(newY / this.imageHeight);
      if (newY < this.minTranslateY + RESERVED_HEIGHT - 20) {
        this.headerTitle = this.headerTitleTouchDown;
      } else {
        this.headerTitle = "歌手";
      }
      if (newY < 0) {
        this.$refs.header.style.background = `rgba(212, 68, 57, ${percent})`;
      } else {
        this.$refs.header.style.background = `rgba(212, 68, 57, 0)`;
      }
      // console.log(this.minTranslateY + RESERVED_HEIGHT)
      // if (translateY )
      // console.log(translateY)
    }
  },
  components: {
    SongList,
    Scroll,
    Loading
  }
};
</script>

<style scoped lang="scss">
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
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
          background: #fff;
          opacity: 0.2;
        }
        .text {
          position: absolute;
          width: 80%;
          height: 1.25rem;
          bottom: 1.5625rem;
          left: 0.625rem;
          color: #fff;
          .list-title {
            position: absolute;
            bottom: 0;
            font-style: italic;
            font-size: $font-size-large;
            line-height: 0.5625rem;
            font-weight: bold;
            letter-spacing: 0.03125rem;
            .music {
              position: absolute;
              top: -0.625rem;
              left: 0.15625rem;
              font-style: italic;
              font-weight: bold;
              font-size: $font-size-medium;
            }
          }
          .update {
            position: absolute;
            top: 1.40625rem;
            left: 0.21875rem;
            line-height: 0.4375rem;
            font-size: $font-size-small;
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
}
</style>

