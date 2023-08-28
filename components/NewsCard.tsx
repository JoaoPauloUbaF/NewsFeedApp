// src/components/NewsCard.tsx

import React from 'react';
import { Box, Text, Image, VStack, HStack } from 'native-base';
import { Article } from '../services/newsService';

type NewsCardProps = {
  article: Article;
  onPress: () => void;
};

const NewsCard: React.FC<NewsCardProps> = ({ article, onPress }) => {
  return (
    <VStack
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      shadow={3}
      onMagicTap={onPress}
      onTouchEndCapture={onPress}
      mb={4}
    >
      <Box>
      <Image
        source={{ uri: article.urlToImage }}
        alt={article.title}
        height={200}
        width="100%"
        />
      <Box position="absolute" bottom={0} left={0} p={4} bg="rgba(0, 0, 0, 0.5)">
        <Text color="white" fontWeight="bold">
          {article.title }
        </Text>
        
      </Box>
      </Box>
      <Box p={4}>
        <Text noOfLines={2}>{article.description}</Text>
      </Box>
    </VStack>
  );
};

export default NewsCard;
