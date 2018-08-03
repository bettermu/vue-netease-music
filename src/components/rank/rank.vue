<template>
  <div class="rank" ref="rank">
    <scroll class="toplist" ref="scroll">
      <ul>
        <li class="item" v-for="item in yunTopList" :key="item.id">
          <div class="icon">
            <img v-lazy="item.coverImgUrl" width="100" height="100">
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song,index) in item.top" :key="index">
              <span>{{index+1}}</span>
              <span>{{song.name}} - {{song.ar[0].name}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div v-show="showLoading" class="loading-content">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import { getTop } from "api/rank";
import Scroll from "base/scroll/scroll";
import Loading from "base/loading/loading";
import { mapMutations } from "vuex";

//获取TOP列表id参数数组
const YUNMUSIC_TOP = [0, 1, 2, 3, 4, 22, 23];
export default {
  data() {
    return {
      yunTopList: [],
      showLoading: true
    };
  },
  created() {
    this._getTopList();
  },
  methods: {
    //获取top列表
    _getTopList() {
      for (let i = 0; i < YUNMUSIC_TOP.length; i++) {
        getTop(YUNMUSIC_TOP[i]).then(res => {
          console.log(res)
          let list = res.data.playlist;
          //只取前三
          list.top = res.data.playlist.tracks.slice(0, 3);
          this.yunTopList.push(list);
        });
        //如果循环到最后，加载显示false
        if (i === YUNMUSIC_TOP.length - 1) {
          this.showLoading = false;
        }
      }
    }
  },
  components: {
    Scroll,
    Loading
  }
};
</script>

<style scoped lang="scss">
@import "~common/scss/variable";
@import "~common/scss/mixin";

.rank {
  position: fixed;
  width: 100%;
}
</style>

