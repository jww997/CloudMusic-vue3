// import { ref } from "vue"

export default {
  audioRef: null,    // 播放控件

  isPlaying: false,  // 播放状态
  curPlaying: null,  // 当前播放
  curPlaylist: null, // 播放列表
  curPlayIndex: -1,  // 音乐索引
  curPlayMode: 1,    // 播放顺序 列表1 单曲2 随机3
  curPlayVolume: 60, // 播放音量

  userInfo: null,    // 用户信息

  isCollapse: false, // 菜单折叠
}