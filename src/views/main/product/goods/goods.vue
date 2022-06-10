<template>
  <div class="goods">
    <page-search
      :search-form-config="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content ref="pageContentRef" :content-table-config="contentTableConfig" page-name="goods">
      <template #oldPrice="scope">
        <span> {{ "￥" + scope.row.oldPrice }} </span>
      </template>
      <template #newPrice="scope">
        <span> {{ "￥" + scope.row.newPrice }} </span>
      </template>
      <template #image="scope">
        <el-image
          style="width: 48px; height: 48px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #status="scope">
        <el-button plain size="mini" :type="scope.row.status ? 'success' : 'danger'">
          {{ scope.row.status ? "上架中" : "下架中" }}
        </el-button>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { searchFormConfig, contentTableConfig } from "@/views/main/product/goods/config";
import PageSearch from "@/components/pageSearch";
import PageContent from "@/components/pageContent/src/pageContent.vue";
import usePageSearchAndContent from "@/hooks/usePageSearchAndContent";

export default defineComponent({
  name: "goods",
  components: { PageContent, PageSearch },
  setup() {
    const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearchAndContent();
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick
    };
  }
});
</script>

<style scoped></style>
