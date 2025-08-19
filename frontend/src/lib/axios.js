// src/lib/axios.js
import axios from 'axios';

// It should *import* or *re-define* the BASE_URL here, or receive it
// from an environment variable that is properly configured.
// Assuming BASE_URL is the same as in useAuthStore.js:
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000" : "/";

export const axiosInstance = axios.create({
    baseURL: BASE_URL + "/api", // Crucial: axios needs its own baseURL
    withCredentials: true, // Important for sending/receiving cookies
});