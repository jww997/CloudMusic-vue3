<template>
  <div class="my-gird">
    <!-- 宫格区域 -->
    <el-row :gutter="gutter">
      <el-col :span="span" v-for="w in list" :key="w.id">
        <slot name="gird" :w="w" />
      </el-col>
    </el-row>
    <!-- 分页区域 -->
    <el-pagination
      background
      class="pagination"
      layout="prev, pager, next"
      :current-page="curPage"
      :page-size="pageSize"
      :total="total"
      @current-change="(v) => $emit(`changePageSize`, v - 1)"
    />
  </div>
</template>

<script>
export default {
  name: "MyGird",
  props: {
    gutter: { type: Number, require: true }, //
    span: { type: Number, require: true }, //
    list: { type: Array, require: true }, // 宫格列表

    curPage: Number,
    pageSize: Number,
    total: Number,
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>
