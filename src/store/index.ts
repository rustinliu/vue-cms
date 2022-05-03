import { createStore } from 'vuex';
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

export default store;
