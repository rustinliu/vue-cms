<template>
  <div class="user">
    <pf-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="footer_btn">
          <el-button>重置</el-button>
        </div>
      </template>
    </pf-form>
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

<style lang="scss" scoped>
h2 {
  font-size: 28px;
}

.footer_btn {
  text-align: right;
  padding-bottom: 12px;
  padding-right: 12px;
}
</style>
