import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../utils/consts';

const configAxiosInstance: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
};

const api = axios.create(configAxiosInstance);

export default api;