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

      <!-- 在page-content中动态插入剩余的插槽 -->
      <template v-for="item in otherPropList" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </pf-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "@/store";
import PfTable from "@/components/commonTable";
import { IPropListConfig } from "@/components/commonTable/type";

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

    // 获取其他的动态插槽名称
    const otherPropList = props.contentTableConfig?.propListConfig.filter(
      (item: IPropListConfig) => {
        if (item.slotName === "createAt") return false;
        if (item.slotName === "updateAt") return false;
        return item.slotName !== "handler";
      }
    );
    return {
      dataList,
      dataCount,
      selectChange,
      getPageData,
      pageInfo,
      otherPropList
    };
  }
});
</script>

<style lang="scss" scoped></style>
