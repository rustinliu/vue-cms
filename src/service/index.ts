import Request from "./request";
import { BASE_URL, TIME_OUT } from "@/service/request/config";
import localCache from "@/utils/cache";

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // withCredentials: isWithCredentials, // 允许跨域携带着cookie
  interceptors: {
    requestInterceptor(config) {
      // 处理请求拦截
      const token = localCache.getCache("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    responseInterceptor(res) {
      // 处理响应拦截
      return res;
    }
  }
});
// const request2 = new Request();
export { request };
