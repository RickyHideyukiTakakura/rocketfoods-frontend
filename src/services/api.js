import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketfoods-backend.onrender.com",
});
