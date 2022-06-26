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
    <page-modal ref="pageModalRef" :modal-config="modalConfigRef" :defaultInfo="defaultInfo" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

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

    const addCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === "password");
      passwordItem!.isHidden = false;
    };
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === "password");
      passwordItem!.isHidden = true;
    };
    const { pageModalRef, defaultInfo, editPageData, addPageData } = usePageModal(
      editCallback,
      addCallback
    );

    // 动态添加角色和部门
    const store = useStore();
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => item.field === "departmentId");
      departmentItem!.selectOptions = store.state.entireDepartment.map((item: any) => {
        return { title: item.name, value: item.id };
      });

      const roleItem = modalConfig.formItems.find((item) => item.field === "roleId");
      roleItem!.selectOptions = store.state.entireRole.map((item: any) => {
        return { title: item.name, value: item.id };
      });
      return modalConfig;
    });
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfigRef,
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
