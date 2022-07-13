<template>
  <div class="container rows point">
    <song-row
      v-for="({ name, id }, index) in topSongList"
      :key="id"
      :id="id"
      :index="index + 1"
      :name="name"
      @click="getSong(id)"
    ></song-row>
  </div>
</template>

<script>
import { ref, inject } from "vue";
import { useStore } from "vuex";
import SongRow from "./songRow";

export default {
  name: "Newest",
  components: { SongRow },
  setup() {
    const { http, GET_TOP_SONG } = inject("apis");
    const topSongList = ref([]);

    // vuex
    const { dispatch } = useStore();

    getTopSong();

    // 获取单曲
    function getSong(id) {
      dispatch("getSong", id);
    }

    // 新歌速递
    async function getTopSong() {
      const { data } = await http(GET_TOP_SONG);
      topSongList.value = data;
    }

    return { getSong, topSongList };
  },
};
</script>

<style lang="scss" scoped>
.rows {
}
</style>
