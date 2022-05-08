import { createRouter, createWebHistory } from "vue-router";
import localCache from "@/utils/cache";
import type { RouteRecordRaw } from "vue-router";
import { firstMenu } from "@/utils/mapMenus";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "noFount",
    component: () => import("@/views/notFound/notFound.vue")
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
  if (to.path === "/main") {
    return firstMenu.url;
  }
});

export default router;
