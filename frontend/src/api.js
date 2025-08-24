import axios from 'axios';

export const API_BASE = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE,
});

// attach token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
