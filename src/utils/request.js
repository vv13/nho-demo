import axios from 'axios';
import { SERVER_API } from '../config';

const instance = axios.create({
  baseURL: SERVER_API,
  timeout: 1000,
  headers: { 'Content-type': 'application/json' },
});

instance.interceptors.response(res => res.data());
