<template>
  <div class="role">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <page-content :content-table-config="contentTableConfig" page-name="role"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContent from "@/components/pageContent/src/pageContent.vue";
import { contentTableConfig, searchFormConfig } from "@/views/main/system/role/config";
import PageSearch from "@/components/pageSearch/src/pageSearch.vue";

export default defineComponent({
  name: "role",
  components: { PageSearch, PageContent },
  setup() {
    return { contentTableConfig, searchFormConfig };
  }
});
</script>

<style scoped></style>
