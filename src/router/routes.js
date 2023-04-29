import store from '@/store';
import Home from "../views/Home";
import About from '../views/About'
import Coaches from "../views/Coaches";
import Login from "../views/Login";
import Index from "../views/Index";

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
        meta: {
            title: 'Index',
            isPublic: true,
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            title: 'About',
            isPublic: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'Login',
            isPublic: true,
        }
    },
    {
        path: '/coaches',
        name: 'coaches',
        component: Coaches,
        meta: {
            title: 'Coaches'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/logout',
        name: 'logout',
        meta: {
            title: 'page.logout',
            isPublic: true,
        },
        // eslint-disable-next-line no-unused-vars
        beforeEnter: (to, from) => {
            store.dispatch('auth/LOGOUT');
            return window.location.assign(window.location.origin+"/login");
        }
    },
    {
        path: '*',
        name: 'page.not.found',
        meta: {
            title: 'page.notFound',
            isPublic: true
        }
    }
]

export default routes;