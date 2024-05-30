import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Markets from "./pages/Markets.jsx";
import World from "./pages/World.jsx";
import Opinion from "./pages/Opinion.jsx";
import Tech from "./pages/Tech.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Box minH="calc(100vh - 200px)">
        <Flex direction={{ base: "column", md: "row" }}>
          <Box flex="3">
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route exact path="/markets" element={<Markets />} />
              <Route exact path="/world" element={<World />} />
              <Route exact path="/opinion" element={<Opinion />} />
              <Route exact path="/tech" element={<Tech />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Box>
          <Box flex="1" display={{ base: "none", md: "block" }}>
            <Sidebar />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;