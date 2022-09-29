import axios from "axios";
import router from "@/router";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers = {
      Authorization: `Bearer ` + token,
      // 'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6ImFkbWluLmV2bzI0LnV6IiwiZXhwIjoxNjY2NjA0ODA3LCJ1dWlkIjoiMTE0NTk0ZWEtYzBmNC00OGE2LWJiYjYtMjQ5YThhNzE2Y2RjLTIifQ.Pkg4eVmxf83tLvqC9KfQM-jaEVEZ-BoabbMS7f_cC6a6Z1TW6HY40R74DJ-aeZuTYZngSichEiztz6pVfOYb5A`
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.request.status === 401) {
      router.push("/401");
    } else if (error.request.status === 404) {
      router.push("/404");
    } else if (error.request.status === 500) {
      router.push("/500");
    } else return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.request.status === 401) {
      router.push("/401");
    } else if (error.request.status === 404) {
      router.push("/404");
    } else if (error.request.status === 500) {
      router.push("/500");
    } else return Promise.reject(error);
  }
);
