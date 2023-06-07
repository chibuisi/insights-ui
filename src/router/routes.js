import store from '@/store';
import User from "@/views/User";
import Coaches from "@/views/Coaches";
import Login from "@/views/Login";
import Welcome from "@/views/Welcome";
import GetStarted from "@/views/GetStarted";
import Blog from "@/views/Blog";
import Register from "@/views/Register";
import PageNotFound from "@/views/PageNotFound";
import Topics from "@/views/Topics";
import Coach from "../views/Coach";

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
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'Minor Insights - Login',
            isPublic: true,
        },
        beforeEnter(to, from, next){
            const isLoggedIn = store.getters['auth/isLoggedIn'];
            if(isLoggedIn) {
                const { ...nextRoute } = from;
                nextRoute.name = from.name;

                if(!from.name) {
                    nextRoute.name = 'welcome'
                }

                nextRoute.replace = true;

                next(nextRoute);
            }
            next();
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
            title: 'Minor Insights - Coaches',
            isPublic: true
        }
    },
    {
        path: '/coach',
        name: 'coach',
        component: Coach,
        meta: {
            title: 'Minor Insights - Coach'
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
        path: '/user',
        name: 'user',
        component: User,
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
        path: '/topics',
        name: 'topics',
        component: Topics,
        meta: {
            title: 'Minor Insights - Topics',
            isPublic: true
        }
    },
    {
        path: '*',
        name: 'page.not.found',
        component: PageNotFound,
        meta: {
            title: 'page.notFound',
            isPublic: true
        }
    }
]

export default routes;