import type { Module } from "vuex";
import type { ILoginStore, IUserMenuItem } from "./type";
import type { IRootStore } from "@/store/type";
import type { IAccount } from "@/service/login/type";
import { mapMenusToRoutes } from "@/utils/mapMenus";

import { fetchUserInfo, fetchUserMenusByRoleId, loginAccount } from "@/service/login/loginApi";
import localCache from "@/utils/cache";
import router from "@/router";
import { ElMessage } from "element-plus";

const loginStore: Module<ILoginStore, IRootStore> = {
  namespaced: true,
  state: () => ({
    token: "",
    userInfo: {},
    userMenus: []
  }),
  getters: {},
  mutations: {
    saveToken(state, token: string) {
      state.token = token;
    },
    saveUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    saveUserMenus(state, userMenus: IUserMenuItem[]) {
      state.userMenus = userMenus;
      const routes = mapMenusToRoutes(userMenus);

      routes.forEach((route) => router.addRoute("main", route));
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 请求用户token
      const result = await loginAccount(payload);
      const { id, token } = result.data;
      commit("saveToken", token);
      localCache.setCache("token", token);

      // 2.请求用户信息
      const { data: userInfo } = await fetchUserInfo(id);
      localCache.setCache("userInfo", userInfo);
      commit("saveUserInfo", userInfo);

      // 3.请求用户菜单
      const { data: userMenus } = await fetchUserMenusByRoleId(id);
      localCache.setCache("userMenus", userMenus);
      commit("saveUserMenus", userMenus);

      // 4. 跳转到首页
      await router.push("/main");
      ElMessage.success("登录成功！");
    },
    loadLocalLoginData({ commit }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("saveToken", token);
      }
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        commit("saveUserInfo", userInfo);
      }
      const userMenus = localCache.getCache("userMenus");
      if (userMenus) {
        commit("saveUserMenus", userMenus);
      }
    },

    async userLogout() {
      localCache.clearCache();

      await router.replace("/login");
      ElMessage.success("退出登录成功！");
    }
  }
};

export default loginStore;
