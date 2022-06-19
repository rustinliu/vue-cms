<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content ref="pageContentRef" :content-table-config="contentTableConfig" page-name="users">
      <template #status="scope">
        <el-button plain size="mini" :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? "启用中" : "禁用中" }}
        </el-button>
      </template>
    </page-content>
    <page-modal :modal-config="modalConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { searchFormConfig, contentTableConfig, modalConfig } from "./config";
import PageSearch from "@/components/pageSearch";
import PageContent from "@/components/pageContent/src/pageContent.vue";
import usePageSearchAndContent from "@/hooks/usePageSearchAndContent";
import PageModal from "@/components/pageModal/src/pageModal.vue";

export default defineComponent({
  name: "user",
  components: { PageModal, PageContent, PageSearch },
  setup() {
    const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearchAndContent();

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick
    };
  }
});
</script>

<style lang="scss" scoped></style>
