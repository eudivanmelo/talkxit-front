import axios from "axios";
import { refreshToken } from "@/services/auth";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // ajuste para seu backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adicionar o token de acesso
api.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem("access");
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para refresh automático do token usando a função do auth.ts
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refreshToken")
    ) {
      originalRequest._retry = true;
      try {
        const refresh = localStorage.getItem("refreshToken");
        // Usa a função já existente
        const res = await refreshToken(refresh!);
        localStorage.setItem("accessToken", res.access);
        localStorage.setItem("refreshToken", res.refresh);
        api.defaults.headers.Authorization = `Bearer ${res.access}`;
        originalRequest.headers.Authorization = `Bearer ${res.access}`;
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;