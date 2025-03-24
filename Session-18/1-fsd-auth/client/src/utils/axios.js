import axios from "axios";

const instance = axios.create({
  baseURL: "https://test-backend-server-65ih.onrender.com",
});

export default instance;
