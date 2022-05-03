<template>
  <div class="login_panel">
    <el-form label-width="60px" :rules="rules" :model="accountFrom" ref="formRef">
      <el-form-item label="账号" prop="account">
        <el-input v-model="accountFrom.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountFrom.password" :show-password="true" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rules } from "./config";
import { ElForm } from "element-plus";
import localCache from "@/utils/cache";

export default defineComponent({
  name: "loginPanel",
  setup() {
    const accountFrom = reactive({
      account: localCache.getCache("account") ?? "",
      password: localCache.getCache("password") ?? ""
    });

    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAction = (isRememberPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 是否需要记住密码
          if (isRememberPassword) {
            localCache.setCache("account", accountFrom.account);
            localCache.setCache("password", accountFrom.password);
          } else {
            localCache.removeCache("account");
            localCache.removeCache("password");
          }

          console.log("loginAction 触发了");
        }
      });
    };
    return {
      accountFrom,
      rules,
      formRef,
      loginAction
    };
  }
});
</script>

<style lang="scss" scoped>
.login_panel {
  width: 296px;
}
</style>
