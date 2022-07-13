<template>
  <div class="personalized point" @click="dispatch('getSonglist', props.id)">
    <el-image class="image" :src="image" lazy></el-image>
    <div class="name">{{ name }}</div>
    <div class="playcount iconfont" v-if="playcount">
      &#xe656;{{ playcount }}
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "RecommendPersonalized",
  props: {
    image: { type: String, require: true },
    name: { type: String, require: true },
    playcount: { type: String, require: true },
    id: { type: String, require: true },
  },
  setup(props) {
    // vuex
    const { dispatch } = useStore();

    return { props, dispatch };
  },
};
</script>

<style lang="scss" scoped>
.personalized {
  margin-bottom: 30px;
  // border-radius: 50% 10px 50% 50%;
  border-radius: 10px;
  transition: $--transition-duration ease-in-out;
  position: relative;
  overflow: hidden;
  display: flex;
  &:hover {
    border-radius: 10px;
    .image {
      transform: scale(1.5) rotate(10deg);
      transform-origin: center;
    }
    .name,
    .playcount {
      padding: 10px;
      opacity: 1;
    }
    .playcount {
      transform: rotate(0deg);
    }
  }
  .image,
  .name,
  .playcount {
    transition: $--transition-duration;
  }

  .image {
    width: 100%;
    height: 100%;
  }
  .name,
  .playcount {
    font-size: 20px;
    color: $--bg-color-normal;
    position: absolute;
  }
  .name {
    width: 100%;
    height: 50%;
    line-height: 25px;
    padding: 0 10px;
    box-sizing: border-box;
    text-align: center;
    background-image: linear-gradient(to top, $--color-normal, transparent);
    overflow: hidden;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    opacity: 0;
  }
  .playcount {
    transform: rotate(10deg);
    text-shadow: 0 0 5px $--color-primary;
    opacity: 0;
    right: 0;
    top: 0;
  }
}
</style>
