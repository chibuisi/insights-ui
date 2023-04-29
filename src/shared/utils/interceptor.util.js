import axios from "axios";

const setupAxiosRequestInterceptor = (store) => {
    axios.interceptors.request.use((config) => {
        const {state} = store;
        const hasJwt = Boolean(state.auth.jwt);
        const alreadyHasAuth = Boolean(config.headers.Authorization);

        if (hasJwt && !alreadyHasAuth) {
            config.headers.Authorization = `Bearer $state.auth.jwt`;
        }

        window.performance.mark(`xhr_start_${config.url}_${config.method}`);

        return config;
    });
};

const setupAxiosResponseInterceptor = (router) => {
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response && error.response.status === 401) {
                router.push({name: 'logout', query: {renew: true}});
            }
            return Promise.reject(error);
        },
    );
};

export const setupInterceptors = (store, router) => {
    setupAxiosRequestInterceptor(store);

    setupAxiosResponseInterceptor(router);
};