
import { createAction } from '@reduxjs/toolkit';
import { Article } from '../../services/newsService';

export const fetchNewsStart = createAction('news/fetchStart');
export const fetchNewsSuccess = createAction<Article[]>('news/fetchSuccess');
export const fetchNewsError = createAction<string>('news/fetchError');
