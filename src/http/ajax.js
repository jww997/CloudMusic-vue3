import axios from "axios";
// import { ElMessage } from "element-plus";

const domain = "http://119.23.73.240";
const port = 3000;

/**
 * 创建实例
 */
const http = axios.create({
  baseURL: `${domain}:${port}`,
  timeout: 1000 * 5,
});

export default (
  url,
  parameter = {},
  extra = {},
  method = "GET",
  header = {}
) => {
  return new Promise((resolve, reject) => {
    method = method.toLocaleUpperCase(); // 转换一下，保证参数传入正确
    ["POST"].includes(method) && (url += `?timestamp=${new Date().getTime()}`); // 不走缓存机制，需加上时间戳
    const cookie = localStorage.getItem("__wwPlayer__cookie");
    if (cookie) parameter.cookie = cookie;
    http.request({
      url,
      [["PUT", "POST", "PATCH"].includes(method) ? "data" : "params"]: parameter,
      method,
      header,
    }).then(({ data }) => {
      resolve(data, extra);
    }).catch(err => {
      reject(err);
    });

  });
}

/**
 * 拦截器
 */
const { request, response } = http.interceptors

// 请求拦截器
request.use(config => {
  // 在发送请求之前做些什么
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
response.use(response => {
  // 对响应数据做点什么

  // console.log(response)

  return response;
}, error => {
  // 对响应错误做点什么

  // console.log(error)

  return Promise.reject(error)
});
