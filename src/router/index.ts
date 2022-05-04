import { createRouter, createWebHistory } from "vue-router";
import localCache from "@/utils/cache";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: () => import("@/pages/login/login.vue")
  },
  {
    path: "/main",
    component: () => import("@/pages/main/main.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    const userInfo = localCache.getCache("userInfo");
    const userMenus = localCache.getCache("userMenus");
    if (!token || !userInfo || !userMenus) {
      return "login";
    }
  }
});

export default router;
