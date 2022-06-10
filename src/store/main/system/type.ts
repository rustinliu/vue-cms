export interface ISystemStore {
  usersList: any[];
  usersCount: number;
  roleList: any[];
  roleCount: number;
  goodsList: any[];
  goodsCount: number;
}

export interface IPagePayload {
  pageName: string;
  queryInfo: any;
}
