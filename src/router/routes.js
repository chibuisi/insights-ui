import store from '@/shared/store';
import Login from "@/login/pages/Login";
import Welcome from "@/home/pages/Welcome";
import GetStarted from "@/home/pages/get-started/GetStarted";
import Blog from "@/home/pages/Blog";
import Register from "@/login/pages/Register";
import PageNotFound from "@/shared/pages/PageNotFound";
import Topics from "@/home/pages/Topics";
import ResetPassword from "../login/pages/reset-password/ResetPassword";
import UpdatePassword from "../login/pages/reset-password/UpdatePassword";
import UnlayerProvider from "../unlayer/pages/UnlayerProvider.vue";
import Dashboard from "../crm/components/Dashboard.vue";
import User from "../crm/pages/User.vue";
import UserTopics from "../components/user/topics/UserTopics.vue";
import Notifications from "../components/user/notifications/Notifications.vue";
import CoachMeetings from "../components/CoachMeetings.vue";
import UserGoals from "../components/user/UserGoals.vue";
import UserAssessments from "../components/user/UserAssessments.vue";
import UserCoachReport from "../components/user/UserCoachReport.vue";
import Profile from "../components/user/Profile.vue";

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
        path: '',
        component: User,
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                meta: {
                    title: 'Minor Insights - Dashboard'
                },
                name: 'dashboard'
            },
            {
                path: 'profile',
                component: Profile,
                meta: {
                    title: 'Minor Insights - Profile'
                },
                name: 'profile'
            },
            {
                path: 'user-topics',
                component: UserTopics,
                meta: {
                    title: 'Minor Insights - User topics'
                },
                name: 'user-topics'
            },
            {
                path: 'notifications',
                component: Notifications,
                meta: {
                    title: 'Minor Insights - Notifications'
                },
                name: 'notifications'
            },
            {
                path: 'user-coach-meetings',
                component: CoachMeetings,
                meta: {
                    title: 'Minor Insights - Coach Meetings'
                },
                name: 'user-coach-meetings'
            },
            {
                path: 'user-goals',
                component: UserGoals,
                meta: {
                    title: 'Minor Insights - User Goals'
                },
                name: 'user-goals'
            },
            {
                path: 'user-assessments',
                component: UserAssessments,
                meta: {
                    title: 'Minor Insights - User Assessments'
                },
                name: 'user-assessments'
            },
            {
                path: 'user-coach-report',
                component: UserCoachReport,
                meta: {
                    title: 'Minor Insights - User Coach Report'
                },
                name: 'user-coach-report'
            },
        ],
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
        path: '/reset-password',
        name: 'resetPassword',
        component: ResetPassword,
        meta: {
            title: 'Minor Insights - Reset Password',
            isPublic: true
        }
    },
    {
        path: '/update-password',
        name: 'updatePassword',
        component: UpdatePassword,
        meta: {
            title: 'Minor Insights - Update Password',
            isPublic: true
        },
        // eslint-disable-next-line no-unused-vars
        beforeEnter: (to, from, next) => {
            const { query } = to
            if(!query.email || !query.token)
                return cancelNavigation(to, from, next)
            next();
        }
    },
    {
        path: '/editor',
        name: 'editor',
        component: UnlayerProvider,
        meta: {
            title: 'Minor Insights - Editor',
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

const cancelNavigation = (to, from, next) => {
    const { ...nextRoute } = from;
    nextRoute.name = from.name;

    if(!from.name) {
        nextRoute.name = 'welcome'
    }

    nextRoute.replace = true;

    next(nextRoute);
}

export default routes;
