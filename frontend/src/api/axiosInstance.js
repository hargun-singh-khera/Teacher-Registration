import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 10000, 
  headers: { 'Content-Type': 'multipart/form-data' }
});

export default axiosInstance;