import axios from "axios";

const API = axios.create({
  baseURL: "http://10.23.252.200:3000/jswm",
});

export default API;