import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
} from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Footer from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Tutorials } from "./pages/Tutorials";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Box fontSize="xl">
      <Grid minH="75vh">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="tutorials" element={<Tutorials />} />
          </Routes>
        </BrowserRouter>
      </Grid>
    </Box>
    <Footer />
  </ChakraProvider>
);
