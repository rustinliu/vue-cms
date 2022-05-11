<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { searchFormConfig } from "./config";
import PageSearch from "@/components/pageSearch/pageSearch.vue";

export default defineComponent({
  name: "user",
  components: { PageSearch },
  setup() {
    return { searchFormConfig };
  }
});
</script>

<style lang="scss" scoped></style>
