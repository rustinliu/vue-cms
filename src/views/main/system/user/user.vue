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
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { searchFormConfig, contentTableConfig } from "./config";
import PageSearch from "@/components/pageSearch";
import PageContent from "@/components/pageContent/src/pageContent.vue";
import usePageSearchAndContent from "@/hooks/usePageSearchAndContent";

export default defineComponent({
  name: "user",
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

<style lang="scss" scoped></style>
