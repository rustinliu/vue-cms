import { createStore, Store, useStore as useVuexStore } from 'vuex';
import login from '@/store/login';
import system from '@/store/main/system';
import type { IRootStore, IStoreType } from './type';
import { fetchPageListData } from '@/service/main/system/systemApi';

const store = createStore<IRootStore>({
    state: () => ({
        name: 'rustin',
        entireDepartment: [],
        entireRole: [],
    }),
    mutations: {
        changeDepartment(state, list) {
            state.entireDepartment = list;
        },
        changeRole(state, list) {
            state.entireRole = list;
        },
    },
    actions: {
        async fetchInitialDataAction({ commit }) {
            //  请求部门和角色数据
            const {
                data: { list: departmentList },
            } = await fetchPageListData('/department/list', {
                offset: 0,
                size: 100,
            });

            const {
                data: { list: roleList },
            } = await fetchPageListData('/role/list', {
                offset: 0,
                size: 100,
            });
            commit('changeDepartment', departmentList);
            commit('changeRole', roleList);
        },
    },
    modules: {
        login,
        system,
    },
});

export const stepStore = () => {
    store.dispatch('login/loadLocalLoginData').then((r) => r);
    store.dispatch('fetchInitialDataAction').then((r) => r);
};
export const useStore = (): Store<IStoreType> => {
    return useVuexStore();
};
export default store;
