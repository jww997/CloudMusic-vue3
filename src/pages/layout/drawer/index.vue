<template>
  <drawer-playlist :isShowPlaylist="isShowPlaylist" @close="close" />
</template>

<script>
import DrawerPlaylist from "./Playlist";
export default {
  name: "LayoutDrawer",
  props: {
    isShowPlaylist: { type: Boolean, require: true },
  },
  components: { DrawerPlaylist },
  setup(props, { emit }) {
    // 关闭抽屉
    const close = () => {
      emit("close");
    };
    return {
      close,
    };
  },
};
</script>

<style lang="scss" scoped></style>
