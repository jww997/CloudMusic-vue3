<template>
  <div class="container recommend">
    <!-- 轮播区域 -->
    <banner :list="banners" />
    <!-- <suspense>
      <banner :list="banners" />
    </suspense> -->
    <!-- 歌单区域 -->
    <wrap title="推荐歌单">
      <el-row gutter="30">
        <el-col :span="3" v-for="item in personalizeds" :key="item.id">
          <personalized
            :image="item.picUrl"
            :name="item.name"
            :playcount="item.playCount"
            :id="item.id"
          />
        </el-col>
      </el-row>
    </wrap>
  </div>
</template>

<script>
// import { ref, inject, defineAsyncComponent } from "vue";
// import Suspense from "@/components/suspense";
// const Banner = defineAsyncComponent(() => import("./banner"));
// const Wrap = defineAsyncComponent(() => import("./wrap"));
// const Personalized = defineAsyncComponent(() => import("./personalized"));

import { ref, inject } from "vue";
import Banner from "./banner";
import Wrap from "./wrap";
import Personalized from "./personalized";

export default {
  name: "Recommend",
  // components: { Suspense, Banner, Wrap, Personalized },
  components: { Banner, Wrap, Personalized },
  setup() {
    const {
      http,
      GET_HOMEPAGE_BANNER,
      // GET_HOMEPAGE_BLOCK_PAGE,
      GET_PERSONALIZED,
      // GET_PLAYLIST_DETAIL,
    } = inject("apis");
    // 自定义变量
    const banners = ref([]);
    const blocks = ref([]);
    const personalizeds = ref([]);

    getBanners();
    // getBlock();
    getPersonalized();

    // 获取轮播图
    async function getBanners() {
      const data = await http(GET_HOMEPAGE_BANNER);
      banners.value = data.banners;
    }
    // 获取首页数据
    // async function getBlock() {
    //   const data = await http(GET_HOMEPAGE_BLOCK_PAGE);
    //   blocks.value = data.data.blocks;
    // }
    // 获取首页数据
    async function getPersonalized() {
      const data = await http(GET_PERSONALIZED);
      personalizeds.value = data.result;
    }

    return { banners, blocks, personalizeds };
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
