import { request } from "@/service";
import { IDataType } from "@/service/type";

export const fetchPageListData = (url: string, queryInfo: any) => {
  return request.post<IDataType>({
    url,
    data: queryInfo
  });
};

export const deletePageData = (url: string) => {
  return request.delete<IDataType>({
    url
  });
};
