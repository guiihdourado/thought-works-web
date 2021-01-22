import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.amagpieinthesky.com'
});

export default api;