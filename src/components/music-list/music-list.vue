<template>
  <transition name="slide" mode="out-in">
    <div class="music-list">这是音乐列表{{$route.params.id}}</div>
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
    console.log(this.musicList.id)
    this._getRecommendListDetail(this.musicList.id);
  },
  computed:{
    ...mapGetters(["musicList"])
  },
  methods: {
    _getRecommendListDetail(id) {
      //console.log(id)
      if (!id) {
        this.$router.push("/recommend");
        return;
      }
      //请求
      getRecommendListDetail(id).then(res => {
        if (res.status === ERR_OK) {
          console.log(res.data.playlist.tracks);
        }
      });
    },

  },
  components: {
    Loading
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
}
</style>

