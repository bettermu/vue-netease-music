<template>
  <div>
    <div>我是rank</div>
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
          console.log(res);
        });
      }
    }
  }
};
</script>
