// src/screens/NewsFeedScreen.tsx

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, VStack, Box, FlatList, Center, Spinner } from 'native-base';
import NewsCard from '../components/NewsCard';
import { AppDispatch, RootState } from '../store/store';
import { fetchNews } from '../store/thunks/newsThunks';

function NewsFeedScreen( { navigation  }: any ) {
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector((state: RootState) => state.news.articles);
  const [page, setPage] = useState(1);
  const loading = useSelector((state: RootState) => state.news.loading);

  useEffect(() => {
    dispatch(fetchNews(page));
  }, [page]);

  if (loading && articles.length === 0) {
  return (
    <Center flex={1}>
      <Spinner size="lg" />
    </Center>
  );
}

  return (
    <Box flex={1} p={4}>
      <Center>
        <Text fontFamily={'Roboto-Bold'} fontSize="4xl" mb={5}>News</Text>
      </Center>
      <Text fontFamily={'Roboto-Bold'} fontSize="2xl" mb={5}>Top Headlines</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={articles}
        renderItem={({ item }) => (
          <NewsCard
            article={item}
            onPress={() => {
              // navigation.navigate('NewsDetails', { article: item });
            }}
          />
        )}
        keyExtractor={item => item.title}
        
        onEndReached={() => setPage(prevPage => prevPage + 1)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => loading ? <Spinner size="lg" /> : null}
      />
    </Box>
  );
}

export default NewsFeedScreen;
