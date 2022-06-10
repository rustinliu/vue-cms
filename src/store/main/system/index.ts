import type { Module } from "vuex";
import { IPagePayload, ISystemStore } from "./type";
import { IRootStore } from "@/store/type";
import { fetchPageListData } from "@/service/main/system/systemApi";

const systemStore: Module<ISystemStore, IRootStore> = {
  namespaced: true,
  state: () => ({
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    goodsList: [],
    goodsCount: 0
  }),
  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list;
    },
    changeUsersCount(state, count: number) {
      state.usersCount = count;
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list;
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count;
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list;
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  actions: {
    async fetchPageListActions({ commit }, payload: IPagePayload) {
      const pageName = payload.pageName;
      const pageUrl = `/${pageName}/list`;
      const pageResult = await fetchPageListData(pageUrl, payload.queryInfo);

      const { list, totalCount } = pageResult.data;

      // 首字母转大写
      const pageNameToCase = pageName.replace(pageName[0], pageName[0].toUpperCase());
      commit(`change${pageNameToCase}List`, list);
      commit(`change${pageNameToCase}Count`, totalCount);
    }
  }
};

export default systemStore;
