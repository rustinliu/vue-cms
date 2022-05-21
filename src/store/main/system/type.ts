export interface ISystemStore {
  usersList: any[];
  usersCount: number;
  roleList: any[];
  roleCount: number;
}

export interface IPagePayload {
  pageName: string;
  queryInfo: any;
}
