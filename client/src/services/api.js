import axios from 'axios';

const API = axios.create({
  baseURL: 'https://solace-awhl.onrender.com',
});

// Attach token to every request automatically
API.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    const { token } = JSON.parse(userInfo);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
