<template>
  <div class="container toplist">
    <!-- 全球区域 -->
    <wrap title="全球榜">
      <el-row gutter="30">
        <el-col :span="4" v-for="item in toplist" :key="item.id">
          <personalized
            :image="item.coverImgUrl"
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
import { ref, inject } from "vue";
import Wrap from "../recommend/wrap";
import Personalized from "../recommend/personalized";

export default {
  name: "Toplist",
  components: { Wrap, Personalized },
  setup() {
    const { http, GET_TOPLIST } = inject("apis");
    const artistToplist = ref([]);
    const toplist = ref([]);

    getToplist();

    // 获取所有榜单
    async function getToplist() {
      const { artistToplist, list } = await http(GET_TOPLIST);

      console.log({ artistToplist, list });
      artistToplist.value = artistToplist;
      toplist.value = list;
    }
    return { artistToplist, toplist };
  },
};
</script>

<style lang="scss" scoped></style>
