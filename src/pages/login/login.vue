<template>
  <div class="login-wrapper">
    <div class="login-box">
      <img src="@/assets/img/logo.png" class="nice-logo" alt="" />
      <p>清栀后台管理</p>
      <login-panel ref="loginAccountRef" />
      <div class="account-control">
        <el-checkbox v-model="isRememberPassword" @change="toggleRemember">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" @click="handleLogin" class="login-btn">立即登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginPanel from "@/components/login/loginPanel.vue";
import localCache from "@/utils/cache";

export default defineComponent({
  components: { LoginPanel },
  setup() {
    // 切换记住密码并缓存
    let isRememberPassword =
      ref<boolean>(localCache.getCache("isRememberPassword")) ?? ref<boolean>(false);
    const toggleRemember = () => {
      localCache.setCache("isRememberPassword", isRememberPassword.value);
    };
    // 处理账号登陆逻辑
    const loginAccountRef = ref<InstanceType<typeof LoginPanel>>();
    const handleLogin = () => {
      loginAccountRef.value?.loginAction(isRememberPassword.value);
    };
    return {
      isRememberPassword,
      loginAccountRef,
      handleLogin,
      toggleRemember
    };
  }
});
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #eee8e0 url("../../assets/img/login-bg.svg") center bottom no-repeat;

  .login-box {
    overflow: hidden;
    height: 486px;
    position: relative;
    width: 350px;
    max-width: 350px;
    margin: 4em auto;
    border-radius: 8px;
    box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.3);
    background: #fff url("../../assets/img/logbg.jpg") no-repeat bottom;
    text-align: center;
    z-index: 80;

    .nice-logo {
      width: 55px;
      margin: 40px 0 0;
    }

    p {
      font-size: 26px;
      color: #d7c682;
      margin-bottom: 35px;
    }
  }

  .account-control {
    padding: 8px 60px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    text-align: center;
  }

  .login-btn {
    width: 65%;
    margin-top: 10px;
  }
}
</style>
