import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.43.200:3000/jswm",
});

export default API;