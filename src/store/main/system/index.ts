import type { Module } from "vuex";
import { IPagePayloadDelete, IPagePayloadFetch, ISystemStore } from "./type";
import { IRootStore } from "@/store/type";
import { deletePageData, fetchPageListData } from "@/service/main/system/systemApi";

const systemStore: Module<ISystemStore, IRootStore> = {
  namespaced: true,
  state: () => ({
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    menuList: [],
    menuCount: 0,
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
    changeMenuList(state, list: any[]) {
      state.menuList = list;
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count;
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
    async fetchPageListAction({ commit }, payload: IPagePayloadFetch) {
      const pageName = payload.pageName;
      const pageUrl = `/${pageName}/list`;
      const pageResult = await fetchPageListData(pageUrl, payload.queryInfo);

      const { list, totalCount } = pageResult.data;

      // 首字母转大写
      const pageNameToCase = pageName.replace(pageName[0], pageName[0].toUpperCase());
      commit(`change${pageNameToCase}List`, list);
      commit(`change${pageNameToCase}Count`, totalCount);
    },

    async deletePageDataAction({ dispatch }, payload: IPagePayloadDelete) {
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;

      // 调用删除接口
      await deletePageData(pageUrl);

      // 再次调用获取接口
      dispatch("fetchPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    }
  }
};

export default systemStore;
