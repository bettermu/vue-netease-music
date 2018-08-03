
import * as types from './mutation-types'

const mutations = {
  //获取推荐音乐列表
  [types.SET_MUSIC_LIST](state, musicList) {
    state.musicList = musicList
  },
  //获取排行列表
  [types.SET_TOP_LIST](state, topList) {
    state.topList = topList
  }
}

export default mutations
