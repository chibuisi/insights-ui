import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './auth';
import boot from './boot'

Vue.use(Vuex);

export const modules = {
    auth,
    boot,
};

const vuexPersistedPathsAllowList = [
    'auth.jwt',
    'auth.user',
    'boot.topics',
    'boot.articles',
    'boot.coaches',
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