import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box color="white" fontSize="xl" fontWeight="bold">
            Financial Times
          </Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'white' : 'gray.300' })}>Home</NavLink>
            <NavLink to="/markets" style={({ isActive }) => ({ color: isActive ? 'white' : 'gray.300' })}>Markets</NavLink>
            <NavLink to="/world" style={({ isActive }) => ({ color: isActive ? 'white' : 'gray.300' })}>World</NavLink>
            <NavLink to="/opinion" style={({ isActive }) => ({ color: isActive ? 'white' : 'gray.300' })}>Opinion</NavLink>
            <NavLink to="/tech" style={({ isActive }) => ({ color: isActive ? 'white' : 'gray.300' })}>Tech</NavLink>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;