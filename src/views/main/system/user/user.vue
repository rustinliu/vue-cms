<template>
  <div class="user">
    <pf-form v-bind="searchFormConfig" v-model="formData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PfForm from "@/components/commonForm";
import { searchFormConfig } from "./config";

export default defineComponent({
  name: "user",
  components: { PfForm },
  setup() {
    // 对象的双向绑定 要使用ref
    const formData = ref({
      id: "",
      username: "",
      password: "",
      sport: "",
      createTime: ""
    });
    return { searchFormConfig, formData };
  }
});
</script>

<style scoped></style>
