<template>
  <div class="rank" ref="rank">
    <scroll class="toplist" ref="scroll">
      <ul>
        <li class="item" v-for="item in yunTopList" :key="item.id" @click="selectItem(item)">
          <div class="icon">
            <img v-lazy="item.coverImgUrl">
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
    //跳转排行详细
    selectItem(item) {
      this.$router.push({
        path: `/rank/${item.id}`
      });
      this.setTopList(item);
    },
    //获取top列表
    _getTopList() {
      for (let i = 0; i < YUNMUSIC_TOP.length; i++) {
        getTop(YUNMUSIC_TOP[i]).then(res => {
          //console.log(res);
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
    },
    ...mapMutations({
      setTopList: "SET_TOP_LIST"
    })
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
  top: 2.75rem;
  bottom: 0;
  .toplist {
    height: 100%;
    overflow: hidden;
    padding-top: 0.15625rem;
    .item {
      display: flex;
      margin: 0 0.3125rem;
      padding: 0.09375rem 0;
      height: 3.125rem;
      border-bottom: 0.03125rem solid rgb(228, 228, 228);
      &:last-child {
        padding-bottom: 0.625rem;
      }
      .icon {
        flex: 0 0 3.125rem;
        width: 3.125rem;
        height: 3.125rem;
        img {
          height: 3.125rem;
          width: 3.125rem;
          border-radius: 0.09375rem;
        }
      }
      .songlist {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0.625rem;
        height: 3.125rem;
        overflow: hidden;
        // background: $color-dialog-background;
        color: $color-text;
        font-size: $font-size-small-x;
        .song {
          @include no-wrap();
          line-height: 0.9375rem;
        }
      }
    }
    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
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

