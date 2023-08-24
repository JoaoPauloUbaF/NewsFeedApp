// src/screens/NewsFeedScreen.tsx

import React from 'react';
import { View, Text, VStack, Box, FlatList } from 'native-base';

const dummyData = [
  { id: '1', title: 'Article 1' },
  { id: '2', title: 'Article 2' },
  // ... add more dummy articles
];

function NewsFeedScreen() {
  return (
    <Box flex={1} p={4}>
      <Text fontSize="2xl" mb={5}>News Feed</Text>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <VStack space={3} mt={4}>
            <Text>{item.title}</Text>
          </VStack>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}

export default NewsFeedScreen;
