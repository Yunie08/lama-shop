import axios from "axios";

// Axios configuration
const customAxios = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
});

export default customAxios;
