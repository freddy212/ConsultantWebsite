import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Footer from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import Navbar from "./components/Navbar";

import { extendTheme } from "@chakra-ui/react";
import { FullStackPage } from "./pages/FullStackPage";
import { MobileDevPage } from "./pages/MobileDevPage";
import { BlockchainPage } from "./pages/BlockchainPage";
import { useEffect } from "react";

const breakpoints = {
  sm: "320px",
  lg: "960px",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });
export const App = () => {
  useEffect(() => {
    document.title = "Frederik Bjørn Consulting";
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" bg="gray.100">
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="fullstack" element={<FullStackPage />} />
            <Route path="mobile" element={<MobileDevPage />} />
            <Route path="blockchain" element={<BlockchainPage />} />
          </Routes>
        </HashRouter>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};
