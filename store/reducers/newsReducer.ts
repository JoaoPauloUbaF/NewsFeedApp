
import { createReducer } from '@reduxjs/toolkit';
import { fetchNewsStart, fetchNewsSuccess, fetchNewsError } from '../actions/newsActions';
import { Article } from '../../services/newsService';

interface NewsState {
  articles: Article[];
  loading: boolean;
  error: null | string;
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};

const newsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchNewsStart, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchNewsSuccess, (state, action) => {
      state.articles = [...state.articles, ...action.payload];
      state.loading = false;
    })
    .addCase(fetchNewsError, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
});

export default newsReducer;
