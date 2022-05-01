<template>
  <div class="login_panel">
    <el-form label-width="60px" :rules="rules" :model="accountFrom">
      <el-form-item label="账号" prop="account">
        <el-input v-model="accountFrom.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountFrom.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { rules } from "./config";

export default defineComponent({
  name: "loginPanel",
  setup() {
    const accountFrom = reactive({
      account: "",
      password: ""
    });

    return {
      accountFrom,
      rules
    };
  }
});
</script>

<style lang="scss" scoped>
.login_panel {
  width: 296px;
}
</style>
