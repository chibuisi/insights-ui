import App from './App.vue'
import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router'
import { createRouter } from "./router";
import store from '@/store'
import * as errorUtils from "./shared/utils/error.util";
import { setupInterceptors } from "./shared/utils/interceptor.util";
import Vue from "vue";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Vuelidate from 'vuelidate'

const router = createRouter(store);

setupInterceptors(store, router);

Vue.use(VueRouter, Vuelidate);

Vue.config.errorHandler = errorUtils.handleError;
errorUtils.handlePromiseRejections();

if(process.env.NODE_ENV === 'development'){
    Vue.config.devtools = true;
    Vue.config.debug = true;
    Vue.config.productionTip = false;
}

sync(store, router);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    created() {
        AOS.init();
    },
    render: (h) => h(App)
}).$mount('#app');

//createApp(App).use(router).mount('#app')

// const app = createApp(App, {
//     store,
//     router
// });
//
// app.mount('#app')
