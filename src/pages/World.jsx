import { Box, Heading, Text } from "@chakra-ui/react";

const World = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>World</Heading>
      <Text fontSize="lg">This is the World section.</Text>
    </Box>
  );
};

export default World;