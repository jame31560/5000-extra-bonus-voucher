import axios, { AxiosRequestConfig } from "axios";

let baseUrl = window.location.origin;

axios.defaults.baseURL = baseUrl;

axios.defaults.timeout = 50000;
axios.defaults.withCredentials = true;

// 發送器
// axios.interceptors.request.use(config => {
// })

// 響應拦截器
// axios.interceptors.response.use(response => {
// })

export const get = (url: string , param: (AxiosRequestConfig | undefined) = undefined) => {
  return axios.get(url, param);
}

export const post = (url: string , param: (AxiosRequestConfig | undefined)) => {
  return axios.post(url, param);
}

export const put = (url: string , param: (AxiosRequestConfig | undefined)) => {
  return axios.put(url, param);
}

export const del = (url: string , param: (AxiosRequestConfig | undefined)) => {
  return axios.delete(url, param);
}

export const uploader = (url: string, file: any) => {
  let params = new FormData()
  params.append('file', file)
  return axios.post(url, params)
}

