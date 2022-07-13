<template>
  <div class="container station">
    <!-- 推荐区域 -->
    <wrap title="电台个性推荐">
      <el-row gutter="30">
        <el-col :span="4" v-for="item in recommend" :key="item.id">
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
import { ref, inject } from "vue";
import Wrap from "../recommend/wrap";
import Personalized from "../recommend/personalized";

export default {
  name: "Station",
  components: { Wrap, Personalized },
  setup() {
    const { http, GET_DJ_PERSONALIZE_RECOMMEND } = inject("apis");
    const recommend = ref([]);

    getDjPersonalizeRecommend();

    // 获取电台个性推荐
    async function getDjPersonalizeRecommend() {
      const { data } = await http(GET_DJ_PERSONALIZE_RECOMMEND);
      console.log(data);
      recommend.value = data;
    }

    return {
      recommend,
    };
  },
};
</script>

<style lang="scss" scoped></style>
