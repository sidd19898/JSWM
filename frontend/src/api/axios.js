import axios from "axios";

const API = axios.create({
  baseURL: "127.0.0.1:3000/jswm",
});

export default API;