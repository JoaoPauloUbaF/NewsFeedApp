import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2', // Replace with your API's base URL
  headers: {
    'Authorization': '28e17acd950f4d5cb51d7544aef48bb4', // Replace with your API key if needed
  },
});

export default api;
