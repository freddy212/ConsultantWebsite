// MyCVBar.js
import React from "react";
import { Box, Text, useColorModeValue, Center, Link } from "@chakra-ui/react";

const CVBar = () => {
  const bgColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("black", "white");

  return (
    <Center>
      <Link
        href="https://gateway.pinata.cloud/ipfs/QmdCXLYUvgNEcwN2r77cTX3MaBuzkkqqLpTLx4rCLbXcCC"
        target="_blank"
        rel="noreferrer"
      >
        <Box bgColor={bgColor} py={4} px={6} borderRadius="md" mt={4} mb={8}>
          <Text fontSize="5xl" fontWeight="bold" color={textColor}>
            My CV
          </Text>
        </Box>
      </Link>
    </Center>
  );
};

export default CVBar;
