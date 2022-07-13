<template>
  <template v-if="isHidden"><!--隐藏--></template>
  <template v-else-if="!route.children">
    <el-menu-item :index="route.nanme">
      <router-link :to="{ name: route.name }">
        {{ route.meta.title }}
      </router-link>
    </el-menu-item>
  </template>
  <template v-else>
    <el-submenu :index="route.name">
      <template #title>
        <i :class="route.meta.icon ? route.meta.icon : 'el-icon-menu'"></i>
        <span>{{ route.meta.title }}</span>
      </template>
      <layout-nav-item
        v-for="item in route.children"
        :key="item.id"
        :route="item"
      >
        {{ item }}
      </layout-nav-item>
    </el-submenu>
  </template>
</template>

<script>
export default {
  name: "LayoutNavItem",
  props: {
    route: { required: true },
  },
  computed: {
    isHidden: ({ route }) => [true].includes(route.meta.hidden),
  },
};
</script>

<style lang="scss" scoped></style>
