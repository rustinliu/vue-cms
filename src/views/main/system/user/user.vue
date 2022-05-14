<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { searchFormConfig } from "./config";
import PageSearch from "@/components/pageSearch/pageSearch.vue";

export default defineComponent({
  name: "user",
  components: { PageSearch },
  setup() {
    const store = useStore();
    store.dispatch("system/fetchPageListActions", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10
      }
    });
    return { searchFormConfig };
  }
});
</script>

<style lang="scss" scoped></style>
