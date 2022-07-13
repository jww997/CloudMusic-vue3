<template>
  <div>
    <div class="title">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "RecommendWrap",
  props: {
    title: { type: String, require: true },
  },
};
</script>

<style lang="scss" scoped>
.title {
  height: 70px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 5px;
    height: 20px;
    border-radius: 20px;
    margin-right: 10px;
    background-color: $--color-primary;
  }
}
</style>
