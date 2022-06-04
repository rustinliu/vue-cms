<template>
  <div>
    <pf-table
      :list-data="dataList"
      :list-count="dataCount"
      v-bind="contentTableConfig"
      @selectChange="selectChange"
      v-model:page="pageInfo"
    >
      <template #headerHandle>
        <div>
          <el-button type="primary" size="medium">新建用户</el-button>
          <el-button icon="el-icon-refresh"></el-button>
        </div>
      </template>

      <!-- 表格插槽 -->
      <template #status="scope">
        <el-button plain size="mini" :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span> {{ $filters.formatTime(scope.row.createAt) }} </span>
      </template>
      <template #updateAt="scope">
        <span> {{ $filters.formatTime(scope.row.updateAt) }} </span>
      </template>
      <template #handler>
        <div>
          <el-button type="text" size="mini" icon="el-icon-edit">编辑</el-button>
          <el-button type="text" size="mini" icon="el-icon-delete" style="color: red">
            删除
          </el-button>
        </div>
      </template>
    </pf-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "@/store";
import PfTable from "@/components/commonTable";

export default defineComponent({
  components: { PfTable },
  props: {
    pageName: {
      type: String,
      required: true
    },
    contentTableConfig: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore();

    // 双向绑定page
    const pageInfo = ref({ currentPage: 0, pageSize: 10 });
    watch(pageInfo, () => {
      getPageData();
    });

    const getPageData = (queryInfo: any = {}) => {
      store.dispatch("system/fetchPageListActions", {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.pageSize * pageInfo.value.currentPage,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      });
    };
    getPageData();

    const dataList = computed(() => store.getters[`system/pageListData`](props.pageName));
    const dataCount = computed(() => store.getters[`system/pageListCount`](props.pageName));
    const selectChange = (value: any) => {
      console.log(value, 111);
    };
    return {
      dataList,
      dataCount,
      selectChange,
      getPageData,
      pageInfo
    };
  }
});
</script>

<style lang="scss" scoped></style>
