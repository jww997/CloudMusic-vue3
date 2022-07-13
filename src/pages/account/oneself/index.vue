<template>
  <div class="container oneself">
    <div class="profile">
      <el-image class="avatar" :src="userInfo?.avatarUrl"></el-image>
      <div class="nickname">{{ userInfo?.nickname }}</div>
      <div class="signature">{{ userInfo?.signature }}</div>
    </div>
    <wrap title="我创建的歌单">
      <el-row gutter="30">
        <el-col
          :span="4"
          v-for="{ coverImgUrl, name, playCount, id } in establishPlaylist"
          :key="id"
        >
          <personalized
            :image="coverImgUrl"
            :name="name"
            :playcount="playCount"
            :id="id"
          /> </el-col
      ></el-row>
    </wrap>
    <wrap title="我收藏的歌单">
      <el-row gutter="30">
        <el-col
          :span="4"
          v-for="{ coverImgUrl, name, playCount, id } in collectPlaylist"
          :key="id"
        >
          <personalized
            :image="coverImgUrl"
            :name="name"
            :playcount="playCount"
            :id="id"
          /> </el-col
      ></el-row>
    </wrap>
  </div>
</template>

<script>
import { ref, inject, computed } from "vue";
import { useStore } from "vuex";
import Wrap from "@/pages/listen/recommend/wrap";
import Personalized from "@/pages/listen/recommend/personalized";

export default {
  name: "Oneself",
  components: { Wrap, Personalized },
  setup() {
    const {
      http,
      // POST_LOGIN_STATEUS,
      // GET_USER_DETAIL,
      GET_USER_PLAYLIST,
      // GET_USER_SUBCOUNT,
    } = inject("apis");
    const establishPlaylist = ref([]);
    const collectPlaylist = ref([]);

    // vuex
    const { getters } = useStore();
    const userInfo = computed(() => getters.userInfo);

    // getLoginPhone();
    // getLoginStatus();

    // getUserDetail();

    getUserPlaylist();
    // getUserSubcount();

    // 获取用户详情
    // async function getUserDetail() {
    //   console.log(account);
    //   const data = await http(GET_USER_DETAIL, { uid: account.id });
    //   console.log(data);
    // }

    // 获取用户歌单
    async function getUserPlaylist() {
      const uid = userInfo.value.userId;
      const { playlist } = await http(GET_USER_PLAYLIST, { uid });
      establishPlaylist.value = playlist.filter((v) => v.creator.userId == uid);
      collectPlaylist.value = playlist.filter((v) => v.creator.userId != uid);
    }

    // async function getUserSubcount() {
    //   const data = await http(GET_USER_SUBCOUNT);
    //   console.log(data);
    // }

    return {
      userInfo,
      establishPlaylist,
      collectPlaylist,
    };
  },
};
</script>

<style lang="scss" scoped>
.oneself {
  .profile {
    margin: 10px;
    height: 200px;
    padding-left: 230px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .avatar {
      width: 200px;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      left: 0;
    }
    .nickname {
      font-size: 30px;
      font-weight: bold;
    }
    .signature {
      margin-top: 30px;
      font-size: 15px;
      color: $--color-normal;
    }
  }
}
</style>
