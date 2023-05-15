import store from '@/store';
import Home from "../views/Home";
import About from '../views/About'
import Coaches from "../views/Coaches";
import Login from "../views/Login";
import Welcome from "../views/Welcome";
import GetStarted from "../views/GetStarted";
import Blog from "../views/Blog";
import Register from "../views/Register";

const routes = [
    {
        path: '/',
        alias: ['','/welcome','/index'],
        name: 'welcome',
        component: Welcome,
        meta: {
            title: 'Minor Insights',
            isPublic: true,
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            title: 'Minor Insights - About',
            isPublic: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'Minor Insights - Login',
            isPublic: true,
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: 'Minor Insights - Register',
            isPublic: true,
        }
    },
    {
        path: '/coaches',
        name: 'coaches',
        component: Coaches,
        meta: {
            title: 'Minor Insights - Coaches'
        },
        beforeEnter(to, from, next){
            const hasCoachRole = store.getters['auth/hasCoachRole'];

            if(!hasCoachRole) {
                const { ...nextRoute } = to;
                nextRoute.name = 'welcome';
                nextRoute.replace = true;

                return next(nextRoute);
            }

            return next();
        }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: 'Minor Insights - User Home'
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
            if(from.name === 'welcome') {
                return false;
            }
            return window.location.assign(window.location.origin+"/login");
        }
    },
    {
        path: '/services',
        name: 'services',
        component: null,
        meta: {
            title: 'Minor Insights - Services',
            isPublic: true
        }
    },
    {
        path: '/getStarted',
        name: 'getStarted',
        component: GetStarted,
        meta: {
            title: 'Minor Insights - Get Started',
            isPublic: true
        }
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
        meta: {
            title: 'Minor Insights - Blog',
            isPublic: true
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