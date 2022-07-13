<!-- <template>
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
  <el-menu
    :default-active="activeIndex"
    class="nav"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
    :collapse="isCollapse"
  >
    <div class="mine">
      <el-image class="cover" url=""></el-image>
      <div class="name">Gavin....</div>
      <div class="triangle"></div>
    </div>
    <el-menu-item index="0-1">发现音乐</el-menu-item>
    <el-menu-item index="0-2">私人FM</el-menu-item>
    <el-menu-item index="0-3">视频</el-menu-item>
    <el-menu-item index="0-4">朋友</el-menu-item>
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-menu"></i>
        <span>我的音乐</span>
      </template>
      <el-menu-item index="1-1">iTunes音乐</el-menu-item>
      <el-menu-item index="1-2">下载管理</el-menu-item>
      <el-menu-item index="1-3">最近播放</el-menu-item>
      <el-menu-item index="1-4">我的音乐云盘</el-menu-item>
      <el-menu-item index="1-5">我的电台</el-menu-item>
      <el-menu-item index="1-6">我的收藏</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-menu"></i>
        <span>创建的歌单</span>
      </template>
      <el-menu-item index="2-1">我喜欢的音乐</el-menu-item>
      <el-menu-item index="2-2">华语女声佳曲</el-menu-item>
      <el-menu-item index="2-3">华语女声佳曲</el-menu-item>
      <el-menu-item index="2-4">华语女声佳曲</el-menu-item>
      <el-menu-item index="2-5">华语女声佳曲</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template #title>
        <i class="el-icon-menu"></i>
        <span>收藏的歌单</span>
      </template>
      <el-menu-item index="3-1">那些好听到爆了的歌</el-menu-item>
      <el-menu-item index="3-2">那些好听到爆了的歌</el-menu-item>
      <el-menu-item index="3-3">那些好听到爆了的歌</el-menu-item>
      <el-menu-item index="3-4">那些好听到爆了的歌</el-menu-item>
      <el-menu-item index="3-5">那些好听到爆了的歌</el-menu-item>
    </el-submenu>
  </el-menu>
</template> -->

<script>
// import { h, ref, computed } from "vue";
import { h, computed } from "vue";
import { useStore } from "vuex";
import { navMenus } from "@/router";
import NavItem from "./NavItem";

export default {
  name: "LayoutNav",
  setup() {
    const { getters } = useStore();
    const isCollapse = computed(() => getters.isCollapse);

    // const activeIndex = ref("0-1");
    // const handleSelect = (key, keyPath) => {
    //   console.log(key, keyPath);
    // };
    // const handleOpen = (key, keyPath) => {
    //   console.log(key, keyPath);
    // };
    // const handleClose = (key, keyPath) => {
    //   console.log(key, keyPath);
    // };
    return {
      isCollapse,
      // activeIndex,
      // handleSelect,
      // handleOpen,
      // handleClose,
    };
  },
  render() {
    return (
      <el-scrollbar>
        <el-menu collapse={this.isCollapse} unique-opened={true}>
          {navMenus.map((route) => h(NavItem, { route }))}
        </el-menu>
      </el-scrollbar>
    );
  },
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: transparent;
}
.mine {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cover {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }
  .name,
  .triangle {
    margin-left: 10px;
  }
  .name {
    font-size: 20px;
  }
  .triangle {
    width: 0;
    height: 0;
    border-width: 7px 10px;
    border-color: transparent transparent transparent #8e8e8f;
    border-style: solid;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
