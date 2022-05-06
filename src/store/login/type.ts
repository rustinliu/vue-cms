export interface ILoginStore {
  token: string;
  userInfo: any;
  userMenus: IUserMenuItem[];
}

export interface IUserMenuItem {
  id: number;
  name: string;
  type: number;
  url: string;
  icon: string;
  sort: number;
  parentId?: number;
  children: IUserMenuItem[];
}
