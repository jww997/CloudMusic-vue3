<template>
  <div class="footer">
    <!-- 滑块条 -->
    <el-slider
      class="footer-slider"
      v-model="curPlaying.percentage"
      :show-tooltip="false"
      @change="changePercentage"
    ></el-slider>
    <!-- 控制条 -->
    <el-row
      class="footer-control"
      justify="space-between"
      align="middle"
      :gutter="40"
    >
      <el-col class="footer-control-msg" :span="7">
        <el-image
          class="cover point"
          :src="curPlaying?.image"
          fit="contain"
          lazy
        />
        <div class="text">
          <div class="point omit">
            <span>{{ curPlaying?.name }} - {{ curPlaying?.singer }}</span>
          </div>
          <div class="point omit">
            {{ curPlaying?.currentTime }} / {{ curPlaying?.duration }}
          </div>
        </div>
      </el-col>
      <el-col class="footer-control-opt" :span="7">
        <!-- <i class="icon point iconfont" v-if="1">&#xe66a;</i>
        <i class="icon point iconfont" v-else>&#xe669;</i> -->
        <i class="icon point iconfont" @click="prev"> <!--上一首-->&#xe616; </i>
        <i
          class="icon point iconfont max"
          v-if="!isPlaying"
          @click="switchPlayState"
        >
          <!--暂停-->&#xe674;
        </i>
        <i class="icon point iconfont max" v-else @click="switchPlayState">
          <!--播放-->&#xe628;
        </i>
        <i class="icon point iconfont" @click="next"> <!--下一首-->&#xe617; </i>
        <i class="icon point iconfont" v-if="0"><!--分享-->&#xe619;</i>
      </el-col>
      <el-col class="footer-control-control" :span="7">
        <span class="icon point">词</span>
        <el-tooltip placement="top" effect="light">
          <i class="icon point iconfont"><!--音量-->&#xe66d;</i>
          <template v-slot:content>
            <el-slider
              class="slider"
              v-model="curPlayVolume"
              :show-tooltip="false"
              height="150px"
              vertical
              @change="switchPlayVolume"
            ></el-slider>
          </template>
        </el-tooltip>
        <el-tooltip
          :content="
            curPlayMode == 1
              ? `列表播放`
              : curPlayMode == 2
              ? `单曲播放`
              : `随机播放`
          "
          placement="top"
          effect="light"
        >
          <i
            class="icon point iconfont"
            v-if="curPlayMode == 1"
            @click="switchPlayMode"
          >
            <!--列表播放-->&#xe600;
          </i>
          <i
            class="icon point iconfont"
            v-else-if="curPlayMode == 2"
            @click="switchPlayMode"
          >
            <!--单曲播放-->&#xe60b;
          </i>
          <i
            class="icon point iconfont"
            v-else-if="curPlayMode == 3"
            @click="switchPlayMode"
          >
            <!--随机播放-->&#xe66e;
          </i>
        </el-tooltip>
        <i class="icon point iconfont" @click="showDrawer">&#xe664;</i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";

export default {
  name: "LayoutFooter",
  setup(props, { emit }) {
    // vuex
    const { getters, commit } = useStore();
    const audioRef = computed(() => getters.audioRef);
    const isPlaying = computed(() => getters.isPlaying);
    const curPlaying = computed(() => getters.curPlaying);
    const curPlaylist = computed(() => getters.curPlaylist);
    const curPlayIndex = computed(() => getters.curPlayIndex);
    const curPlayMode = computed(() => getters.curPlayMode);
    const curPlayVolume = computed(() => getters.curPlayVolume);
    const setIsPlaying = (isPlaying) => commit("SET_IS_PLAYING", isPlaying);
    const setCurPlayIndex = (curPlayIndex) =>
      commit("SET_CUR_PLAY_INDEX", curPlayIndex);
    const setCurPlayMode = (curPlayMode) =>
      commit("SET_CUR_PLAY_MODE", curPlayMode);
    const setCurPlayVolume = (curPlayVolume) =>
      commit("SET_CUR_PLAY_VOLUME", curPlayVolume);

    // 按键事件
    document.onkeypress = ({ shiftKey, keyCode }) => {
      console.log(keyCode);
      switch (shiftKey && keyCode) {
        case 32: // 播放暂停 Shift && Space
          switchPlayState();
          break;
        case 95: // 上一曲 Shift && -
          prev();
          break;
        case 43: // 下一曲 Shift && +
          next();
          break;
      }
    };

    // 上一首
    function prev() {
      if (curPlayIndex.value > 0) {
        let index = curPlayIndex.value;
        setCurPlayIndex(--index);
      } else {
        ElMessage.warning("到底了～～");
      }
    }
    // 下一首
    function next() {
      if (curPlaylist.value.length - 1 > curPlayIndex.value) {
        let index = curPlayIndex.value;
        setCurPlayIndex(++index);
      } else {
        ElMessage.warning("到底了～～");
      }
    }
    // 暂停 && 播放
    function switchPlayState() {
      setIsPlaying(!isPlaying.value);
    }
    // 滑块百分比
    function changePercentage(val) {
      audioRef.value.currentTime = audioRef.value.duration * (+val / 100);
    }

    // 播放模式
    function switchPlayMode() {
      let mode = curPlayMode.value;
      setCurPlayMode(mode == 3 ? 1 : ++mode);
    }

    // 打开播放列表弹窗
    function showDrawer() {
      emit("showDrawer");
    }

    // console.log(curPlayVolume);
    // console.log(curPlayVolume.value);

    // 音量控制节点 jsx
    // const volumeRef = (
    //   <el-slider
    //     model-value={curPlayVolume.value}
    //     vertical
    //     height="200px"
    //     show-tooltip={false}
    //     style="margin: 15px 0"
    //     onChange={(v) => {
    //       console.log(v);
    //       setCurPlayVolume(v);
    //     }}
    //   ></el-slider>
    // );

    // 设置音量
    function switchPlayVolume(val) {
      console.log(val);
      setCurPlayVolume(10);
    }

    // 点击音量

    return {
      isPlaying,
      curPlaying,
      curPlayMode,
      curPlayVolume,
      prev,
      next,
      switchPlayState,
      switchPlayMode,
      changePercentage,
      switchPlayVolume,
      showDrawer,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  height: 100%;
  position: relative;
  box-shadow: 0 0 30px $--color-normal;
  &-slider {
    position: absolute;
    top: -20px;
    right: 0;
    left: 0;
  }
  &-control {
    height: 100%;
    padding: 0 20px;
    margin: 0 !important;
    &-msg,
    &-opt,
    &-control {
      height: 70%;
      display: flex !important;
      justify-content: center;
      align-items: center;
    }
    &-msg {
      .cover {
        flex-shrink: 0;
        height: 100%;
        margin-right: 10px;
        border-radius: 5px;
      }
      .text {
        flex-grow: 1;
        width: 1px;
        > div:first-child {
          margin-bottom: 10px;
        }
      }
    }
    &-opt {
      .icon {
        color: $--color-primary;
        &.max {
          font-size: 40px;
        }
      }
    }
    &-control {
      justify-content: flex-end;
      .icon {
        color: $--color-normal;
      }
      .slider {
        margin: 15px 0;
      }
    }
    .icon {
      margin: 0 15px;
    }
  }
}
</style>
