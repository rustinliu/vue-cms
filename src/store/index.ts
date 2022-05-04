import { createStore, Store, useStore as useVuexStore } from 'vuex';
import login from '@/store/login';
import type { IRootStore } from './type';

const store = createStore<IRootStore>({
    state: () => ({
        name: 'rustin',
    }),
    modules: {
        login,
    },
});

export const stepStore = () => {
    store.dispatch('login/loadLocalLoginData').then((r) => r);
};
export const useStore = (): Store<IRootStore> => {
    return useVuexStore();
};
export default store;
