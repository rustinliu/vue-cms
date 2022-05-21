<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
    <page-content :content-table-config="contentTableConfig" page-name="users"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { searchFormConfig, contentTableConfig } from "./config";
import PageSearch from "@/components/pageSearch";
import PageContent from "@/components/pageContent/src/pageContent.vue";

export default defineComponent({
  name: "user",
  components: { PageContent, PageSearch },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    };
  }
});
</script>

<style lang="scss" scoped></style>
