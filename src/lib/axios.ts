import { BACKEND_URL } from '@/lib/constants';
import axios from 'axios';

export const api = axios.create({
  baseURL: BACKEND_URL,
});
