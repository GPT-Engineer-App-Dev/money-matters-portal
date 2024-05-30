import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>About Us</Heading>
      <Text fontSize="lg">This is the About page.</Text>
    </Box>
  );
};

export default About;