<template>
  <div class="container toplist">
    <!-- 歌手区域 -->
    <el-row gutter="30">
      <el-col :span="6" v-for="item in artists" :key="item.id">
        <artist :image="item.picUrl" :name="item.name" :id="item.id" />
      </el-col>
    </el-row>

    <el-row gutter="30">
      <el-col :span="6" v-for="item in artists" :key="item.id">
        <personalized :image="item.picUrl" :name="item.name" :id="item.id" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, inject } from "vue";
import Personalized from "../recommend/personalized";
import Artist from "./artist";

export default {
  name: "Singer",
  components: { Artist, Personalized },
  setup() {
    const { http, GET_ARTIST_LIST, GET_TOPLIST_ARTIST } = inject("apis");
    const artists = ref([]);

    getArtistList();
    getToplist();

    // 获取歌手分类列表
    async function getArtistList() {
      const data = http(GET_ARTIST_LIST);
      console.log(data);
    }

    // 获取所有榜单
    async function getToplist() {
      const data = await http(GET_TOPLIST_ARTIST);
      artists.value = data.list.artists;
    }
    return { artists };
  },
};
</script>

<style lang="scss" scoped></style>
