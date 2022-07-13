<template>
  <my-gird :span="6" :gutter="30" :list="mv.list">
    <template v-solt:gird="{ w }">
      <!-- {{ w }} -->
    </template>
  </my-gird>
</template>

<script>
import { ref, reactive, inject } from "vue";
import MyGird from "@/components/myGird";

export default {
  name: "Video",
  components: { MyGird },
  setup() {
    const { http, GET_MV_ALL } = inject("apis");
    const mvList = ref([]);
    const mv = reactive({
      list: [],
    });

    getMvAll();

    // 获取全部视频
    async function getMvAll() {
      const data = await http(GET_MV_ALL);
      console.log(data);
      Object.assign(mv, data);
      mvList.value = data.data;
    }

    return {
      mvList,
      mv,
    };
  },
};
</script>

<style lang="scss" scoped></style>
