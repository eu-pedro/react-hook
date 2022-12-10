import axios from 'axios';
// criando instancia do axios

export const api = axios.create({
  baseURL: "http://localhost:8001",
})