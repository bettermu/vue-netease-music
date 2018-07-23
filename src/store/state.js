import {playMode} from 'common/js/config'

const state={
  musicList:{},
  singer:{},
  //播放
  playing:false,
  //全屏
  fullScreen:false,
  playList:[],
  //顺序列表
  sequenceList:[],
  //播放模式
  mode:playMode.sequence,
  //当前播放索引
  currentIndex:-1,
  disc:{},
  topList:{},

}

export default state
