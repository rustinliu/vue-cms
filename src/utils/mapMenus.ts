import { IUserMenuItem } from "@/store/login/type";
import type { RouteRecordRaw } from "vue-router";

let firstMenu: any = null;
export const mapMenusToRoutes = (userMenus: IUserMenuItem[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = [];

  // 1. 加载所有的 routes
  const allRoutes: RouteRecordRaw[] = [];

  const routeFiles = require.context("../router/main", true, /\.ts/);

  routeFiles.keys().forEach((item) => {
    const route = require("../router/main" + item.slice(1));
    allRoutes.push(route.default);
  });

  // 2. 根据传的 路由菜单来动态的显示需要的路由
  const _recurseGetRoute = (menus: IUserMenuItem[]) => {
    for (const menu of menus) {
      if (menu.type !== 2) _recurseGetRoute(menu.children);

      const route = allRoutes.find((item) => item.path === menu.url);
      if (route) routes.push(route);
      if (!firstMenu) {
        firstMenu = menu;
      }
    }
  };

  _recurseGetRoute(userMenus);
  return routes;
};
type ICurrentMenu = IUserMenuItem | undefined;
export const pathMapToMenus = (userMenus: IUserMenuItem[], currentPath: string): ICurrentMenu => {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenus(menu.children ?? [], currentPath);
      if (findMenu) {
        return findMenu;
      }
    } else if (menu.type === 2 && currentPath === menu.url) {
      return menu;
    }
  }
};

export { firstMenu };
