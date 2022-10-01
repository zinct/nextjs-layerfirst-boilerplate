import axios from "axios";
import cookies from "next-cookies";
import router from "next/router";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // toast.error("Terjadi kesalahan pada server!");
  }
);

function get(url, options) {
  // if (!_.isEmpty(query)) queryString = fetchQueryString(query);

  // return axios.get(`${url}?${queryString}`, options);

  let newOptions = options;

  if (options?.ctx) {
    const token = cookies(options.ctx).token;
    const newHeaders = { Authorization: `Bearer ${token}` };
    newOptions = { ...newOptions, headers: newHeaders };
  }

  return axios.get(url, newOptions);
}

function post(url, data = {}, headers = {}) {
  return axios.post(url, data, headers);
}

function put(url, data = {}, options = {}) {
  return axios.post(`${url}?_method=PUT`, data, options);
}

function del(url) {
  return axios.delete(url);
}

const http = {
  get,
  post,
  put,
  del,
};
export default http;
