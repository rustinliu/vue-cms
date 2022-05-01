import Request from "./request";
import { BASE_URL, isWithCredentials, TIME_OUT } from "@/service/request/config";

const request1 = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: isWithCredentials, // 允许跨域携带着cookie
  interceptors: {
    requestInterceptor(config) {
      // console.log("请求拦截 config:", config);
      return config;
    },
    responseInterceptor(res) {
      // console.log("相应拦截 res:", res);
      return res;
    }
  }
});
// const request2 = new Request();
export { request1 };
