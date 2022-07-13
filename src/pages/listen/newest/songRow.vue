<template>
  <div class="song-row">
    <span>{{ index }}</span>

    {{ name }}
  </div>
</template>

<script>
export default {
  name: "NewestSongRow",
  props: {
    index: { type: String || Number, require: true },
    image: { type: String, require: true },
    name: { type: String, require: true },
    // playcount: { type: String, require: true },
    id: { type: String, require: true },
  },
};
</script>

<style lang="scss" scoped>
.song-row {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
