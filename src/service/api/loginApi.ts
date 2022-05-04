import { request } from "@/service";
import { IAccount, IDataType, ILoginResult } from "./type";

enum loginURL {
  AccountLogin = "/login",
  LoginUserInfo = "/users/", // 用法: /users/1
  UserMenus = "/role/" // 用法: role/1/menu
}

export const loginAccount = (accountFrom: IAccount) => {
  return request.post<IDataType<ILoginResult>>({
    url: loginURL.AccountLogin,
    data: accountFrom
  });
};

export const fetchUserInfo = (id: number) => {
  return request.get<IDataType>({
    url: loginURL.LoginUserInfo + id,
    showLoading: false
  });
};

export const fetchUserMenusByRoleId = (id: number) => {
  return request.get<IDataType>({
    url: loginURL.UserMenus + id + "/menu",
    showLoading: false
  });
};
