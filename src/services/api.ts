// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api', // Ensure this is the correct base URL
});

export const login = (email: string, password: string) => {
  return api.post('/login', { email, password });
};

export const register = (email: string, password: string) => {
  return api.post('/register', { email, password });
};

export const fetchUsers = () => {
  return api.get('/users');
};