export interface ILoginStore {
  token: string;
  userInfo: any;
  userMenus: IUserMenuItem[];
  permissions: string[];
}

export interface IUserMenuItem {
  id: number;
  name: string;
  type: number;
  url: string;
  icon: string;
  sort: number;
  parentId?: number;
  permission: string;
  children: IUserMenuItem[];
}
