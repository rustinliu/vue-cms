<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
    <pf-table
      :list-data="userList"
      :prop-list="propListConfig"
      :is-show-index-column="isShowIndexColumn"
      :is-show-select-column="isShowSelectColumn"
      @selectChange="selectChange"
    >
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
import { searchFormConfig, propListConfig } from "./config";
import PageSearch from "@/components/pageSearch/pageSearch.vue";
import PfTable from "@/components/commonTable";

export default defineComponent({
  name: "user",
  components: { PageSearch, PfTable },
  setup() {
    const store = useStore();
    store.dispatch("system/fetchPageListActions", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10
      }
    });
    const userList = computed(() => store.state.system.userList);
    const isShowIndexColumn = true;
    const isShowSelectColumn = true;
    const selectChange = (value: any) => {
      console.log(value);
    };
    return {
      searchFormConfig,
      userList,
      propListConfig,
      isShowIndexColumn,
      isShowSelectColumn,
      selectChange
    };
  }
});
</script>

<style lang="scss" scoped></style>
