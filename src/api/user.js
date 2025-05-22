import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;
console.log("API URL:", import.meta.env.VITE_API_BASE_URL); // Debugging line

export const registerUser = (data) => axios.post(`${API}/register`, data);

export const loginUser = (data) => axios.post(`${API}/login`, data);
