import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.0.100:3000/jswm",
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default API;