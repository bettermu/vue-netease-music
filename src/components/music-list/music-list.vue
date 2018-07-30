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
      <div class="music-list-wrapper">
        <div class="bg-image" ref="bgImage">
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
          <song-list></song-list>
        </div>
      </div>
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
export default {
  data() {
    return {
      listDetail: [],
      scrollY: 0,
      headerTitle: "歌单"
    };
  },
  created() {
    console.log(this.musicList.id);
    this._getRecommendListDetail(this.musicList.id);
  },
  computed: {
    ...mapGetters(["musicList"])
  },
  methods: {
    //返回
    back() {
      this.$router.back();
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
    position:fixed;
    top:0;
    width:100%;
    height:1.375rem;
    color:#fff;
    z-index:100;
    .back {
      position:absolute;
      top:0;
      left:.125rem;
      .fa-angle-left {
        padding:.15625rem .3125rem;
        font-size:.9375rem;
      }
    }
    .text {
      position:absolute;
      left:1.1875rem;
      line-height:1.375rem;
      font-size: $font-size-medium-x;
      @include no-wrap()
    }
  }
}
</style>

