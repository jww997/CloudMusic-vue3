<template>
  <el-row class="header" type="flex" justify="space-between">
    <!-- 关闭 && 前进后退 -->
    <el-col class="header-left" :span="4">
      <div class="dots">
        <div
          class="dot point"
          style="background-color: #ec6a5d"
          @click="closePage"
        ></div>
        <div
          class="dot point"
          style="background-color: #f5c04f"
          @click="hidePage"
        ></div>
        <div class="dot point" style="background-color: #61c855"></div>
      </div>
      <div class="pace">
        <i class="el-icon-arrow-left point"></i>
        <i class="el-icon-arrow-right point"></i>
      </div>
    </el-col>
    <el-col class="header-right" :span="20">
      <!-- 菜单折叠 -->
      <el-icon
        class="icon point"
        :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        @click="switchIsCollapse"
      ></el-icon>

      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->

      <!-- 面包屑区域 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>

      <div style="flex-grow: 1;"></div>

      <!-- 菜单 -->
      <!-- <el-menu
        :default-active="activeIndex"
        :router="true"
        class="menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#f9f9f9"
        active-text-color="#000000"
        text-color="#646464"
        style="border:none"
      >
        <el-menu-item v-for="(item, index) in menu" :key="index" :index="index">
          {{ item }}
        </el-menu-item>
      </el-menu> -->

      <!-- 搜索区域 -->
      <el-input class="search" placeholder="搜索" v-model="searchValue">
        <template #prefix>
          <i class="el-input__icon el-icon-search"></i>
        </template>
      </el-input>

      <!-- 用户信息区域 -->
      <el-tooltip placement="bottom" effect="light" :disabled="!userInfo">
        <router-link :to="{ name: userInfo ? 'Oneself' : 'Login' }">
          <el-avatar
            class="avatar"
            :size="50"
            :src="
              userInfo?.avatarUrl ||
                'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
            "
          ></el-avatar>
        </router-link>
        <template #content>
          <div class="nickname">{{ userInfo?.nickname }}</div>

          <el-button class="point" @click="postLogout">退出登录</el-button>
        </template>
      </el-tooltip>
    </el-col>
  </el-row>
</template>

<script>
import { ref, reactive, computed, provide, inject } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";

export default {
  name: "LayoutHeader",
  setup() {
    provide("isCollapse", isCollapse); // 菜单折叠
    const activeIndex = ref(0);
    const menu = reactive([
      "个性推荐",
      "歌单",
      "主播电台",
      "排行榜",
      "歌手",
      "最新音乐",
    ]);
    const searchValue = ref("");
    const { http, POST_LOGOUT } = inject("apis");

    // vue-router
    const router = useRouter();
    // vuex
    const { getters, commit } = useStore();
    const userInfo = computed(() => getters.userInfo);
    const isCollapse = computed(() => getters.isCollapse);
    const setIsCollapse = (isCollapse) => commit("SET_IS_COLLAPSE", isCollapse);
    const setUserInfo = (userInfo) => commit("SET_USERINFO", userInfo);

    // 关闭页面
    function closePage() {
      console.log("关闭页面");
      window.opener = null;
      window.open("about:blank", "_top").close();
    }

    // 最小化页面
    function hidePage() {
      console.log("最小化页面");
    }

    // 切换菜单折叠
    function switchIsCollapse() {
      setIsCollapse(!isCollapse.value);
    }

    // 退出登录
    async function postLogout() {
      const { code } = await http(POST_LOGOUT);
      code == 200 && ElMessage.success("退出登录成功");
      localStorage.removeItem("__wwPlayer__cookie");
      localStorage.removeItem("__wwPlayer__userInfo");
      document.cookie = null;
      setUserInfo(null);
      router.replace({ name: "Login" });
    }

    let aaa = [
      { i: 0, name: "333" },
      { i: 1, name: "111", check: true },
      { i: 0, name: "222", default: true },
      { i: 0, name: "333" },
      { i: 0, name: "333" },
      { i: 0, name: "333" },
      { i: 0, name: "333" },
    ];

    aaa.sort((v1, v2) => {
      if (!v1.default && v2.default) {
        return 1;
      } else if (!v1.check && v2.check) {
        return 1;
      } else {
        return -1;
      }

      // return v2.default ? 1 : v2.check ? 0 : -1;
    });

    // (v2.default ? 1 : -1))
    // .sort((v1, v2) => (v2.check ? 1 : -1));
    console.log(aaa);

    return {
      activeIndex,
      menu,
      userInfo,
      searchValue,
      isCollapse,
      closePage,
      hidePage,
      switchIsCollapse,
      postLogout,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  .header-left,
  .header-right {
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  .header-left {
    box-sizing: border-box;
    background-color: #f6f6f6;
    display: flex;
    justify-content: space-between;
    .dots {
      display: flex;
      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 10px;
        border: 2px solid rgba(0, 0, 0, 0.1);
      }
    }
    .pace {
      align-self: flex-end;
      font-size: 25px;
      color: #dbdbdb;
      display: flex;
      justify-items: center;
      align-items: center;
    }
  }
  .header-right {
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu {
      flex-grow: 1;
    }

    .search {
      flex-shrink: 0;
      width: 150px;
    }

    .nickname {
      font-size: 25px;
    }
  }
}
</style>
