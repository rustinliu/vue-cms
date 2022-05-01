import axios from "axios";
import { ElLoading } from "element-plus";
import type { AxiosInstance } from "axios";
import { RequestConfig, RequestInterceptors } from "./type";
import type { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type";

const DEFAULT_LOADING = true;

class Request {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;
  showLoading?: boolean;
  loading?: ILoadingInstance;

  constructor(config: RequestConfig) {
    // 创建 axios 实例
    this.instance = axios.create(config);
    // 保存基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    this.interceptors = config.interceptors;

    // 实例的拦截器
    this.instance.interceptors.request.use(
      // 请求拦截
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      // 响应拦截
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 全局的拦截器 (每个实例都会执行的)
    this.instance.interceptors.request.use(
      (config) => {
        // 做一些请求拦截操作

        // 判断是否要显示loading
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        // 做一些响应拦截操作

        // 请求成功后移除loading
        this.loading?.close();
        return res.data;
      },
      (error) => {
        // 请求错误时也要移除
        return Promise.reject(error);
      }
    );
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          this.showLoading = DEFAULT_LOADING; // 请求成功后，恢复默认状态
          resolve(res);
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING; // 请求失败也要初始化
          return reject(err);
        });
    });
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }

  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }

  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "PATCH" });
  }

  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }
}

export default Request;
