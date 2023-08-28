// src/screens/NewsFeedScreen.tsx

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, VStack, Box, FlatList, Center, Spinner, Button, IconButton, Icon, HStack, Spacer } from 'native-base';
import NewsCard from '../components/NewsCard';
import { AppDispatch, RootState } from '../store/store';
import { fetchNews } from '../store/thunks/newsThunks';
import { MaterialIcons } from '@expo/vector-icons';

function NewsFeedScreen( { navigation  }: any ) {
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector((state: RootState) => state.news.articles);
  const [page, setPage] = useState(1);
  const loading = useSelector((state: RootState) => state.news.loading);

  useEffect(() => {
    dispatch(fetchNews(page));
  }, [page]);

  const handleLogOut = () => {
    dispatch({ type: 'auth/logout' });
  };

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
      <HStack>
      <Spacer/>
        <Text fontFamily={'Roboto-Bold'} fontSize="4xl" mb={5}>Notícias</Text>
      <Spacer/>
      <IconButton
      icon={<Icon as={MaterialIcons} name="logout" size="sm" color="muted.700" />}
      onPress={handleLogOut}
      />
      </HStack>
      </Center>
      <Text fontFamily={'Roboto-Bold'} fontSize="2xl" mb={5}>Manchetes principais</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={articles}
        renderItem={({ item }) => (
          <NewsCard
            article={item}
            onPress={() => {
              navigation.navigate('NewsDetails', { article: item });
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
