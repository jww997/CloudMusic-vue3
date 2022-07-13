<template>
  <el-drawer
    :title="`当前播放（共${curPlaylist?.length}首）`"
    :model-value="isShowPlaylist"
    @close="close"
  >
    <!-- <div
        class="row"
        :class="{ active: curPlayIndex == index }"
        v-for="(item, index) in curPlaylist"
        :key="index"
        @click="setCurPlayIndex(index)"
      >
        <div class="name point omit">{{ item.name }}</div>
        <div class="singer point omit">{{ item.singer }}</div>
      </div> -->

    <el-table
      stripe
      :data="curPlaylist"
      :show-header="false"
      :row-class-name="
        ({ row, rowIndex }) => {
          row.index = rowIndex;
          return rowIndex == curPlayIndex && 'active';
        }
      "
      @row-click="({ index }) => setCurPlayIndex(index)"
    >
      <el-table-column
        class-name="point"
        prop="name"
        width="300"
      ></el-table-column>
      <el-table-column class-name="point" prop="singer"></el-table-column>
    </el-table>
  </el-drawer>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "LayoutDrawerPlaylist",
  props: {
    isShowPlaylist: { type: Boolean, require: true },
  },
  setup(props, { emit }) {
    // vuex
    const { getters, commit } = useStore();
    const curPlaying = computed(() => getters.curPlaying);
    const curPlaylist = computed(() => getters.curPlaylist);
    const curPlayIndex = computed(() => getters.curPlayIndex);
    const setCurPlayIndex = (index) => {
      commit("SET_CUR_PLAY_INDEX", index);
    };

    // 关闭抽屉
    const close = () => {
      emit("close");
    };

    return {
      curPlaying,
      curPlaylist,
      curPlayIndex,
      setCurPlayIndex,
      close,
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  padding: 20px;
  transition: $--transition-duration;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.active {
    color: $--color-primary;
  }
  .name {
    flex: 2;
    font-size: 20px;
  }
  .singer {
    flex: 1;
    font-size: 15px;
  }
}
.active {
  color: $--color-primary;
}
</style>
