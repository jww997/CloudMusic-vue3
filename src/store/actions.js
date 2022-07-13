import { ElMessage } from "element-plus";
import apis from "@/http/index.js";
import * as types from "./mutations-type";









// 获取歌单列表
export const getSonglist = async ({ commit }, id) => {
  const {
    http,
    GET_PLAYLIST_DETAIL,
  } = apis;
  commit(types.SET_CUR_PLAY_INDEX, -1);
  const data = await http(GET_PLAYLIST_DETAIL, { id });
  const playlist = data.playlist?.tracks?.map((item) => {
    const {
      id,
      name,
      ar,
      al: { picUrl: image },
    } = item;
    const singer = ar
      .map((item, index) => `${index !== 0 ? "/" : ""}${item.name}`)
      .toString()
      .replace(/,/g, "");
    return { name, singer, image, id };
  });
  commit(types.SET_CUR_PLAYLIST, playlist);
  commit(types.SET_CUR_PLAY_INDEX, 0);
}

// 获取单曲
export const getSong = async ({ getters, commit }, id) => {
  const {
    http,
    GET_CHECK_MUSIC,
    GET_SONG_URL,
    GET_SONG_DETAIL,
  } = apis;
  try {
    const { success, message } = await http(GET_CHECK_MUSIC, { id });
    if (success) {
      getSongUrl(id);
      getSongDetail(id);
    } else {
      ElMessage.error(message);
    }
  } catch (err) {
    ElMessage.warning("亲爱的，暂无版权！");
  }
  // 获取单曲资源地址
  async function getSongUrl(songId) {
    const data = await http(GET_SONG_URL, { id: songId });
    getters.audioRef.src = data?.data[0]?.url;
  }
  // 获取单曲信息详情
  async function getSongDetail(songId) {
    const data = await http(GET_SONG_DETAIL, { ids: songId });
    const {
      id,
      name,
      ar,
      al: { picUrl: image },
    } = data?.songs[0];
    const singer = ar
      .map((item, index) => `${index !== 0 ? "/" : ""}${item.name}`)
      .toString()
      .replace(/,/g, "");
    commit(types.SET_CUR_PLAYING, { name, singer, image, id });
  }
}

