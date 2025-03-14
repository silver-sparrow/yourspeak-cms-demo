import axios, { AxiosInstance } from "axios";

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

export default axiosObj;
