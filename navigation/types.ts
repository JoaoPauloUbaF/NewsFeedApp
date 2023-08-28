import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Article } from '../services/newsService';

export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  NewsFeed: undefined;
  NewsDetails: { article: Article };
};

export type NewsDetailsScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetails'>;
export type NewsDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewsDetails'>;
