<template>
  <transition name="slide">
    <div class="music-list">rank详情页{{$route.params.id}}</div>
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

    this._normalizeSongs(this.topList.tracks)
    this.probeType = 3
    this.listenScroll = true
  },

  computed: {
    ...mapGetters(["topList"])
  },
  methods: {
    //格式化歌曲列表
    _normalizeSongs(list) {
      if (!this.topList.id) {
        this.$router.push("/rank");
        return;
      }
      let ret = [];
      list.forEach((item) => {
        ret.push(createRecommendListSong(item));
      });
      this.listDetail = ret;
      console.log(ret)
    }
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
}
</style>

