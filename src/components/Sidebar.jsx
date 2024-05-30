import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box p={4} bg="gray.50" borderRadius="md" boxShadow="md">
      <Heading as="h2" size="md" mb={4}>Trending News</Heading>
      <VStack spacing={3} align="stretch">
        <Text>Trending news item 1</Text>
        <Text>Trending news item 2</Text>
        <Text>Trending news item 3</Text>
        <Text>Trending news item 4</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;