import type { Module } from "vuex";
import type { ILoginStore } from "./type";
import type { IRootStore } from "@/store/type";

const loginStore: Module<ILoginStore, IRootStore> = {
  namespaced: true,
  state: () => ({
    token: "",
    userInfo: {}
  }),
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log("触发了action", payload);
    }
  }
};

export default loginStore;
