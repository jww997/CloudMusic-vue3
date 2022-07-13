<template>
  <el-container class="layout-container-warp">
    <!-- 头部区域 -->
    <el-header class="layout-header">
      <layout-header />
    </el-header>
    <!-- 主体区域 -->
    <el-container class="layout-container">
      <!-- 左侧区域 -->
      <el-aside class="layout-aside" width="auto">
        <layout-nav />
      </el-aside>
      <!-- 右侧区域 -->
      <el-main class="layout-main">
        <transition name="el-fade-in-linear">
          <RouterView />
        </transition>
      </el-main>
    </el-container>
    <!-- 底部区域 -->
    <transition name="el-zoom-in-bottom">
      <el-footer class="layout-footer" v-if="curPlaying">
        <layout-footer @showDrawer="isShowPlaylist = true" />
      </el-footer>
    </transition>
    <!-- 抽屉区域 -->
    <layout-drawer :isShowPlaylist="isShowPlaylist" @close="closeDrawer" />
  </el-container>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import LayoutHeader from "./Header";
import LayoutFooter from "./Footer";
import LayoutNav from "./nav";
import LayoutDrawer from "./drawer";

export default {
  name: "Layout",
  components: { LayoutHeader, LayoutFooter, LayoutNav, LayoutDrawer },
  setup() {
    const isShowPlaylist = ref(false);
    // vuex
    const { getters } = useStore();
    const curPlaying = computed(() => getters.curPlaying);

    // 关闭所有抽屉
    const closeDrawer = () => {
      isShowPlaylist.value = false;
    };
    return { curPlaying, isShowPlaylist, closeDrawer };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  &-container-warp {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &-header,
  &-footer {
    flex-shrink: 0;
    height: $--bar-height !important;
  }
  &-footer {
    height: $--bar-height * 1.2 !important;
  }
  &-container {
    flex-grow: 1;
    overflow-y: scroll;
  }
  &-aside {
    background-color: #ededec;
  }
}
</style>
