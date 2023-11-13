import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './auth';
import boot from './boot';
import rainforest from '../../crm/rainforest/onboarding/store';

Vue.use(Vuex);

export const modules = {
    auth,
    boot,
    rainforest,
};

const vuexPersistedPathsAllowList = [
    'auth.jwt',
    'auth.user',
    'boot.topics',
    'boot.articles',
    'boot.coaches',
    'rainforest.session'
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
