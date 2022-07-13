<template>
  <!-- 路由界面 -->
  <router-view />
  <!-- 播放控件 -->
  <audio ref="audioRef" :loop="curPlayMode == 2" />
</template>

<script>
import { ref, computed, onMounted, defineComponent, provide, watch } from "vue";
import { useStore } from "vuex";
import apis from "@/http/index.js";
import dayjs from "dayjs";

export default defineComponent({
  setup() {
    provide("apis", apis); // 全局注入
    const audioRef = ref(null);

    // vuex
    const { getters, commit, dispatch } = useStore();
    const curPlaying = computed(() => getters.curPlaying);
    const curPlaylist = computed(() => getters.curPlaylist);
    const curPlayIndex = computed(() => getters.curPlayIndex);
    const curPlayMode = computed(() => getters.curPlayMode);
    const setAudioRef = (audioRef) => commit("SET_AUDIO_REF", audioRef);
    const setCurPlayIndex = (curPlayIndex) =>
      commit("SET_CUR_PLAY_INDEX", curPlayIndex);
    const setIsPlaying = (isPlaying) => commit("SET_IS_PLAYING", isPlaying);
    const setUserInfo = (userInfo) => commit("SET_USERINFO", userInfo);

    onMounted(() => {
      watch(
        () => getters.isPlaying,
        (newVal) => {
          newVal ? audioRef.value.play() : audioRef.value.pause();
        }
      );
      watch(
        () => getters.curPlayVolume,
        (newVal) => {
          audioRef.value.volume = newVal / 100;
        }
      );
      watch(
        () => getters.curPlayIndex,
        (newVal) => {
          if (newVal === -1) return false;
          dispatch("getSong", curPlaylist.value[newVal].id);
        }
      );

      const userInfo = localStorage.getItem("__wwPlayer__userInfo");
      setUserInfo(JSON.parse(userInfo));

      audioRef.value.ontimeupdate = () => {
        const { currentTime, duration } = audioRef.value;

        if (currentTime && duration) {
          curPlaying.value.currentTime = format(currentTime);
          curPlaying.value.duration = format(duration);
          curPlaying.value.percentage = (currentTime / duration) * 100;
        }

        function format(second) {
          return dayjs(second * 1000).format("mm:ss");
        }
      };
      audioRef.value.oncanplay = () => {
        audioRef.value.play();
      };
      audioRef.value.onplay = () => {
        setIsPlaying(true);
      };
      audioRef.value.onpause = () => {
        setIsPlaying(false);
      };
      audioRef.value.onended = () => {
        let index = curPlayIndex.value;
        if (curPlayMode.value == 3) {
          let newIndex = random();
          index == newIndex && (newIndex = random());
          setCurPlayIndex(newIndex);
        } else if (curPlaylist.value.length - 1 == index) {
          setCurPlayIndex(0);
        } else if (curPlayMode.value == 1) {
          setCurPlayIndex(++index);
        }
        function random() {
          return Number.parseInt(curPlaylist.value.length * Math.random());
        }
      };

      setAudioRef(audioRef); // DOM 元素将在初始渲染后分配给 ref
    });

    return {
      audioRef,
      curPlayMode,
      setAudioRef,
    };
  },
});
</script>

<style lang="scss">
html,
body,
#app {
  width: 100vw;
  height: 100vh;
}
#app {
  overflow: hidden;
}
body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  background-color: $--bg-color-normal;
  color: $--color-normal;
}

.container {
  padding: 0 30px;
  box-sizing: border-box;
}

.point {
  cursor: pointer;
}

.omit {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.icon {
  font-size: 20px;
  &:hover {
    color: $--color-primary !important;
  }
}
</style>
