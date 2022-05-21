<template>
  <div>
    <pf-table :list-data="dataList" v-bind="contentTableConfig" @selectChange="selectChange">
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
import { computed, defineComponent } from "vue";
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
    store.dispatch("system/fetchPageListActions", {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    });
    const dataList = computed(() => store.getters[`system/pageListData`](props.pageName));
    console.log(dataList);
    const selectChange = (value: any) => {
      console.log(value);
    };
    return {
      dataList,
      selectChange
    };
  }
});
</script>

<style lang="scss" scoped></style>
