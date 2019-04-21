import axios from 'axios';
import { SERVER_API } from '../config';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? SERVER_API : '',
  timeout: 1000,
  headers: { 'Content-type': 'application/json' },
});

instance.interceptors.response.use(
  res => res.data,
  err => {
    const errData = err.response.data;
    if (errData && errData.code === 2) {
      location.replace('/');
    }
  }
);

export default instance;
