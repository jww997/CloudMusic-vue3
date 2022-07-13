<template>
  <Suspense>
    <template v-slot:default>
      <slot />
    </template>
    <template v-slot:fallback>
      <h3>骚等，加载中...</h3>
    </template>
  </Suspense>
</template>

<script>
export default {
  name: "Suspence",
};
</script>

<style lang="scss" scoped></style>
