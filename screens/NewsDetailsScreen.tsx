import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { Box, Image, ScrollView, Text, VStack, Link, HStack } from 'native-base';
import { RootStackParamList } from '../navigation/types';

type Props = {
  route: RouteProp<RootStackParamList, 'NewsDetails'>;
};

const NewsDetailsScreen: React.FC<Props> = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView flex={1} bg="white">
      <Box>
        <Image source={{ uri: article.urlToImage }} alt={article.title} width="100%" height={200} />
        <Box position="absolute" bottom={0} left={0} right={0} p={4}>
          <Text fontSize="xl" color="white" fontWeight="bold">{article.title}</Text>
        </Box>
      </Box>
      <VStack p={4} space={3}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="sm" color="gray.500">{article.source.name}</Text>
          <Text fontSize="sm" color="gray.500">{new Date(article.publishedAt).toLocaleDateString()}</Text>
        </HStack>
        <Text fontSize="md">{article.content}</Text>
        <Link href={article.url} isExternal color="blue.500" fontSize="sm">Ler artigo completo</Link>
      </VStack>
    </ScrollView>
  );
}

export default NewsDetailsScreen;
