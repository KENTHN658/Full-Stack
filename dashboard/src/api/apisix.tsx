import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9180/apisix/admin',
  headers: {
    'X-API-KEY': 'secretadminkey', // ใช้ key จาก config.yaml หรือ ENV
  },
});

export default api;
