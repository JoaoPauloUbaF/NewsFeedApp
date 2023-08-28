// src/screens/NewsDetailsScreen.tsx

import React from 'react';
import { Image, Text, VStack, Box, ScrollView } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Article } from '../services/newsService';

type RootStackParamList = {
  NewsFeed: undefined;
  NewsDetails: { article: Article };
};

type NewsDetailsScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetails'>;
type NewsDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewsDetails'>;

type Props = {
  route: NewsDetailsScreenRouteProp;
  navigation: NewsDetailsScreenNavigationProp;
};

const NewsDetailsScreen: React.FC<Props> = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView>
      <Box>
        <Image
          source={{ uri: article.urlToImage }}
          alt="News Image"
          height={250}
          width="100%"
        />
        <Box position="absolute" bottom={0} p={4} width="100%" bgColor="rgba(0,0,0,0.5)">
          <Text color="white" fontSize="xl" fontFamily="Roboto-Bold">
            {article.title}
          </Text>
        </Box>
      </Box>
      <VStack p={4} space={3}>
        <Text fontFamily="Roboto-Regular">{article.description}</Text>
      </VStack>
    </ScrollView>
  );
}

export default NewsDetailsScreen;
