import VueRouter from 'vue-router'
import {handleError} from "@/shared/utils/error.util";

import routes from '@/router/routes';
import { beforeEachRoute, beforeResolveRoute } from '@/router/utils/router.utils';

export const createRouter = (store) => {
  const router = new VueRouter({
      mode: 'history',
      scrollBehavior: (_, __, savedPosition) => {
        if(savedPosition) {
          return savedPosition;
        }
        return {x: 0, y: 0};
      },
      routes,
  });

  router.beforeEach(beforeEachRoute);
  router.beforeResolve((to, from, next) => {
    return beforeResolveRoute(to, from, next, store);
  });

  router.onError(handleError);

  return router;
}
