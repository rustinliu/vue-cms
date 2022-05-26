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
import { defineComponent, ref } from "vue";
import { searchFormConfig, contentTableConfig } from "./config";
import PageSearch from "@/components/pageSearch";
import PageContent from "@/components/pageContent/src/pageContent.vue";

export default defineComponent({
  name: "user",
  components: { PageContent, PageSearch },
  setup() {
    const pageContentRef = ref<InstanceType<typeof PageContent>>();
    const handleResetClick = () => {
      pageContentRef.value?.getPageData();
    };
    const handleQueryClick = (queryInfo: any) => {
      pageContentRef.value?.getPageData(queryInfo);
    };
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
