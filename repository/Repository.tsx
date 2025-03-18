import axios, { AxiosInstance } from "axios";
import { toast } from "react-hot-toast";
import Router from "next/router";

const baseDomain = process.env.NEXT_PUBLIC_BACKEND_URL;
const baseURL = `${baseDomain}`;

const axiosObj: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosObj.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosObj.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        toast.error("Session expired. Please log in again.");
        Router.push("/auth");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosObj;
