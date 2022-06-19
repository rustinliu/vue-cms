<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="users"
      @editBtnClick="editPageData"
      @addBtnClick="addPageData"
    >
      <template #status="scope">
        <el-button plain size="mini" :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? "启用中" : "禁用中" }}
        </el-button>
      </template>
    </page-content>
    <page-modal ref="pageModalRef" :modal-config="modalConfig" :defaultInfo="defaultInfo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PageSearch from "@/components/pageSearch";
import PageContent from "@/components/pageContent/src/pageContent.vue";
import PageModal from "@/components/pageModal/src/pageModal.vue";

import { searchFormConfig, contentTableConfig, modalConfig } from "./config";

import usePageSearchAndContent from "@/hooks/usePageSearchAndContent";
import usePageModal from "@/hooks/usePageModal";

export default defineComponent({
  name: "user",
  components: { PageModal, PageContent, PageSearch },
  setup() {
    const { handleResetClick, handleQueryClick, pageContentRef } = usePageSearchAndContent();
    const { pageModalRef, defaultInfo, editPageData, addPageData } = usePageModal();
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageContentRef,
      pageModalRef,
      handleResetClick,
      handleQueryClick,
      editPageData,
      addPageData,
      defaultInfo
    };
  }
});
</script>

<style lang="scss" scoped></style>
