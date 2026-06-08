import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.1.35:3000/jswm",
});

export default API;