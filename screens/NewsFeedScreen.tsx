// src/screens/NewsFeedScreen.tsx

import React, { useEffect, useState } from 'react';
import { logoutSuccess } from '../store/actions/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, VStack, Box, FlatList, Center, Spinner, Button, IconButton, Icon, HStack, Spacer } from 'native-base';
import NewsCard from '../components/NewsCard';
import { AppDispatch, RootState } from '../store/store';
import { fetchNews } from '../store/thunks/newsThunks';
import { MaterialIcons } from '@expo/vector-icons';
import { logoutUser } from '../services/auth';

function NewsFeedScreen({ navigation }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector((state: RootState) => state.news.articles);
  const user = useSelector((state: RootState) => state.auth.user); // Get user from Redux state
  const [page, setPage] = useState(1);
  const loading = useSelector((state: RootState) => state.news.loading);

  useEffect(() => {
    dispatch(fetchNews(page));
  }, [page]);

  const handleLogOut = () => {
    logoutUser();
    dispatch(logoutSuccess());
    navigation.navigate('Login');
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
          <Spacer />
          <Text fontFamily={'Roboto-Bold'} fontSize="4xl" mb={5}>Notícias</Text>
          <Spacer />
          <IconButton
            icon={<Icon as={MaterialIcons} name="logout" size="sm" color="muted.700" />}
            onPress={handleLogOut}
          />
        </HStack>
      </Center>
      <Text>Bem vindo, {user?.email}</Text> {/* Display user's email */}
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
