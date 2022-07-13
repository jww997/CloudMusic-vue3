<template>
  <div class="container playlist">
    <!-- 标签区域 -->
    <div class="tags">
      <div
        class="tag point"
        :class="{ active: playlist.cat == item.name }"
        v-for="item in tags"
        :key="item.id"
        @click="switchTagsName(item.name)"
      >
        {{ item.name }}
      </div>
    </div>

    <!-- 歌单区域 -->
    <my-gird
      :span="6"
      :gutter="30"
      :list="playlist.playlists"
      :current-page="curPage"
      :page-size="pageSize"
      :total="playlist.total"
      @changePageSize="changePageSize"
    >
      <template v-slot:gird="{ w }">
        <personalized
          :image="w.coverImgUrl"
          :name="w.name"
          :playcount="w.playCount"
          :id="w.id"
        />
      </template>
    </my-gird>
  </div>
</template>

<script>
import { ref, reactive, inject, watch, onMounted } from "vue";
import MyGird from "@/components/myGird";
import Personalized from "../recommend/personalized";

export default {
  name: "Songlist",
  components: { MyGird, Personalized },
  setup() {
    const {
      http,
      GET_PLAYLIST_HOT,
      // GET_PLAYLIST_CATLIST,
      GET_PLAYLIST,
    } = inject("apis");
    const tags = ref([]);
    const curPage = ref(0);
    const pageSize = ref(20);
    const playlist = reactive({
      cat: "",
      playlists: [],
      total: 0,
    });

    getPlaylist();
    getPlaylistClassifyHot();

    onMounted(() => {
      watch(curPage, () => {
        getPlaylist();
      });
    });

    function switchTagsName(name) {
      getPlaylist(name);
      curPage.value = 0;
    }

    function changePageSize(val) {
      curPage.value = val;
    }

    // 获取热门歌单分类列表
    async function getPlaylistClassifyHot() {
      const data = await http(GET_PLAYLIST_HOT);
      tags.value = data.tags;
    }

    // 获取歌单分类列表
    // async function getPlaylistClassify() {
    //   const data = await http(GET_PLAYLIST_CATLIST);
    //   // playlists.value = data.playlists;
    // }

    // 获取歌单列表
    async function getPlaylist(cat = "华语") {
      const data = await http(GET_PLAYLIST, {
        limit: pageSize.value,
        offset: curPage.value * pageSize.value,
        ...(cat && { cat }),
      });
      Object.assign(playlist, data);
    }

    return {
      curPage,
      pageSize,
      tags,
      playlist,
      changePageSize,
      switchTagsName,
      getPlaylist,
    };
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  height: 100%;
  .tags {
    height: 100px;
    background-color: $--bg-color-normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
    .tag {
      font-size: 20px;
      &.active {
        color: $--color-primary;
      }
    }
  }
}
</style>
