// src/store/thunks/newsThunks.ts

import { AppDispatch } from '../store';
import { fetchNewsStart, fetchNewsSuccess, fetchNewsError } from '../actions/newsActions';
import { getTopHeadlines } from '../../services/newsService';

export const fetchNews = (page: number) => async (dispatch: AppDispatch) => {
  dispatch(fetchNewsStart());
  try {
    const news = await getTopHeadlines('us', page);
    dispatch(fetchNewsSuccess(news));
  } catch (error: any) {
    dispatch(fetchNewsError(error.toString()));
  }
};
