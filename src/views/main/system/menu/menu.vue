<template>
  <div class="menu">
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pageContent from "@/components/pageContent/src/pageContent.vue";
import { contentTableConfig } from "./config";

export default defineComponent({
  name: "sys-menu",
  components: { pageContent },
  setup() {
    return { contentTableConfig };
  }
});
</script>

<style scoped></style>
