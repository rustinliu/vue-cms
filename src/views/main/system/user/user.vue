<template>
  <div class="user">
    <pf-form v-bind="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PfForm from "@/components/commonForm";
import { searchFormConfig } from "./config";

export default defineComponent({
  name: "user",
  components: { PfForm },
  setup() {
    return { searchFormConfig };
  }
});
</script>

<style scoped></style>
