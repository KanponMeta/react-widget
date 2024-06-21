import axios from "axios";
import store from "@/store";

// axios的配置文件, 可以在这里去区分开发环境和生产环境等全局一些配置
export const BASE_URL = "/api";
export const TIMEOUT = 60000;

const request = axios.create({
  baseURL: BASE_URL, //基准地址
  timeout: TIMEOUT,
});

//拦截请求
request.interceptors.request.use((config) => {
  const tokenValue = store.getState().login.token || "no token";

  console.log("token", tokenValue);
  if (!tokenValue) {
    return config;
  }

  config.headers["Authorization"] = tokenValue;
  return config;
});

//拦截响应
request.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    //对响应的错误做点什么
    return Promise.reject(error);
  }
);

export default request;
