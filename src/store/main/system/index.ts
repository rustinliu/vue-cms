import type { Module } from "vuex";
import { IPagePayload, ISystemStore } from "./type";
import { IRootStore } from "@/store/type";
import { fetchPageListData } from "@/service/main/system/systemApi";

const systemStore: Module<ISystemStore, IRootStore> = {
  namespaced: true,
  state: () => ({
    userList: [],
    userCount: 0
  }),
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    }
  },
  actions: {
    async fetchPageListActions({ commit }, payload: IPagePayload) {
      console.log("payload", payload);
      const pageResult = await fetchPageListData(payload.pageUrl, payload.queryInfo);
      console.log("pageResult", pageResult);

      const { list, totalCount } = pageResult.data;

      commit("changeUserList", list);
      commit("changeUserCount", totalCount);
    }
  }
};

export default systemStore;
