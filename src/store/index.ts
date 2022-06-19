import { createStore, Store, useStore as useVuexStore } from "vuex";
import login from "@/store/login";
import system from "@/store/main/system";
import type { IRootStore, IStoreType } from "./type";

const store = createStore<IRootStore>({
  state: () => ({
    name: 'rustin',
  }),
  modules: {
    login,
    system
  }
});

export const stepStore = () => {
  store.dispatch("login/loadLocalLoginData").then((r) => r);
};
export const useStore = (): Store<IStoreType> => {
  return useVuexStore();
};
export default store;
