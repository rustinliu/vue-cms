<template>
  <div class="role">
    <page-search
      :search-form-config="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContent from "@/components/pageContent/src/pageContent.vue";
import PageSearch from "@/components/pageSearch/src/pageSearch.vue";
import { contentTableConfig, searchFormConfig } from "@/views/main/system/role/config";
import usePageSearchAndContent from "@/hooks/usePageSearchAndContent";

export default defineComponent({
  name: "role",
  components: { PageSearch, PageContent },
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
