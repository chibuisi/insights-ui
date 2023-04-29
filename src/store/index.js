import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './auth';

Vue.use(Vuex);

export const modules = {
    auth,
};

const vuexPersistedPathsAllowList = [
    'auth.jwt',
    'auth.user',
];

const localStorageKey = `minor-insights-${process.env.VUE_APP_ENV}`;

export default new Vuex.Store({
    modules,
    plugins: [
        createPersistedState({
            key: localStorageKey,
            paths: vuexPersistedPathsAllowList,
        }),
    ],
})