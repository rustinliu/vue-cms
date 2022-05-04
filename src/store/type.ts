import { ILoginStore } from "@/store/login/type";

export interface IRootStore {
  name: string;
}

export interface IRootWithModules {
  login: ILoginStore;
}

export type IStoreType = IRootStore & IRootWithModules;
