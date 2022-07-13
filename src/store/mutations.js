import * as types from "./mutations-type"

export default {
  [types.SET_AUDIO_REF](state, audioRef) {
    state.audioRef = audioRef;
  },
  [types.SET_IS_PLAYING](state, isPlaying) {
    state.isPlaying = isPlaying;
  },
  [types.SET_CUR_PLAYING](state, curPlaying) {
    state.curPlaying = curPlaying;
  },
  [types.SET_CUR_PLAYLIST](state, curPlaylist) {
    state.curPlaylist = curPlaylist;
  },
  [types.SET_CUR_PLAY_INDEX](state, curPlayIndex) {
    state.curPlayIndex = curPlayIndex;
  },
  [types.SET_CUR_PLAY_MODE](state, curPlayMode) {
    state.curPlayMode = curPlayMode;
  },
  [types.SET_CUR_PLAY_VOLUME](state, curPlayVolume) {
    state.curPlayVolume = curPlayVolume;
  },
  [types.SET_USERINFO](state, userInfo) {
    state.userInfo = userInfo;
  },
  [types.SET_IS_COLLAPSE](state, isCollapse) {
    state.isCollapse = isCollapse;
  },
}