<template>
  <div class="login_panel">
    <el-form label-width="60px" :rules="rules" :model="accountFrom" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountFrom.name" />
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
import { useStore } from "vuex";

export default defineComponent({
  name: "loginPanel",
  setup() {
    const store = useStore();
    const accountFrom = reactive({
      name: localCache.getCache("name") ?? "coderwhy",
      password: localCache.getCache("password") ?? "123456"
    });

    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAction = (isRememberPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 是否需要记住密码
          if (isRememberPassword) {
            localCache.setCache("name", accountFrom.name);
            localCache.setCache("password", accountFrom.password);
          } else {
            localCache.removeCache("name");
            localCache.removeCache("password");
          }
          store.dispatch("login/accountLoginAction", accountFrom);
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
