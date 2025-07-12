import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://post-it-backend-0q8h.onrender.com/api",
});
