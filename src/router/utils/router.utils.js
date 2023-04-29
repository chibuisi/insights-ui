import VueRouter from 'vue-router'
import Vue from 'vue'

export const beforeEachRoute = ( to, from, next ) => {
    const isInitialized = !from || from === VueRouter.START_LOCATION;

    if(!isInitialized) {
        window.performance.clearMarks(`transition_${to.name}_start`);
        window.performance.mark(`transition_${to.name}_start`);
        window.performance.mark(`transition_start`);
    }

    next();
}

export const beforeResolveRoute = async ( to, _, next, store ) => {
    await store.dispatch('auth/VERIFY_LOGIN');

    const isLoggedIn = store.getters['auth/isLoggedIn'];

    if(!isLoggedIn && !to.meta.isPublic) {
        if(to.meta.title === 'login')
            window.location.assign(`/login?redirect=home`);
        else
            window.location.assign(`/login?redirect=${to.name}`);
        return next(false);
    }

    setTitle(to, store);

    return next();
}

const setTitle = (route) => {
    const documentTitle = route.meta.title;

    Vue.nextTick(() => {
        document.title = documentTitle;
    });
}