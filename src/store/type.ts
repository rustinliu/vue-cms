import { ILoginStore } from "@/store/login/type";
import { ISystemStore } from "@/store/main/system/type";

export interface IRootStore {
  name: string;
  entireDepartment: string[];
  entireRole: string[];
}

export interface IRootWithModules {
  login: ILoginStore;
  system: ISystemStore;
}

export type IStoreType = IRootStore & IRootWithModules;
