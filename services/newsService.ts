// src/services/newsService.ts

import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '28e17acd950f4d5cb51d7544aef48bb4'; // Replace 'YOUR_API_KEY' with your actual API key

const newsAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
});

export const getTopHeadlines = async (country = 'us', page = 1) => {
  try {
    const response = await newsAPI.get('/top-headlines', {
      params: {
        country: country,
        pageSize: 10, // Number of articles you want to fetch
        page: page
      }
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error;
  }
};

export type Article = {
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
  source: {
    id?: string;
    name: string;
  };
};
