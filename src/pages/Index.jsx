import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={4}>
      <VStack spacing={10} align="stretch">
        <Box>
          <Heading as="h1" size="xl" mb={4}>Headline News</Heading>
          <Text fontSize="lg">This is the main headline news section.</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Heading as="h2" size="md" mb={4}>News Section 1</Heading>
            <Text>Details about news section 1.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>News Section 2</Heading>
            <Text>Details about news section 2.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>News Section 3</Heading>
            <Text>Details about news section 3.</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Index;