import { ReactNode } from "react";
import {
  Button,
  Text,
  useColorModeValue,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Box,
} from "@chakra-ui/react";

export const TechnologyBox = () => {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.900")}
      px={4}
      mt="2rem"
      w="100%"
    >
      <Heading fontSize={"6xl"} textAlign="center">
        {" "}
        Technologies i use{" "}
      </Heading>
      <SimpleGrid
        columns={{ base: 0, md: 2 }}
        spacing={10}
        paddingTop="2rem"
        paddingBottom="2rem"
      >
        <VStack>
          <Text fontSize={"4xl"} color="green">
            Kotlin
          </Text>
          <Text fontSize={"3xl"} color="green">
            Java
          </Text>
          <Text fontSize={"2xl"} color="green">
            C#
          </Text>
          <Text fontSize={"xl"} color="green">
            NodeJS
          </Text>
        </VStack>
        <VStack>
          <Text fontSize={"4xl"} color="blue">
            React
          </Text>
          <Text fontSize={"3xl"} color="blue">
            Typescript
          </Text>
          <Text fontSize={"2xl"} color="blue">
            ChakraUI
          </Text>
          <Text fontSize={"xl"} color="blue">
            Nextjs
          </Text>
        </VStack>
        <VStack>
          <Text fontSize={"4xl"} color="orange">
            Algorand
          </Text>
          <Text fontSize={"3xl"} color="orange">
            IPFS
          </Text>
          <Text fontSize={"2xl"} color="orange">
            Ethereum
          </Text>
          <Text fontSize={"xl"} color="orange">
            Cardano
          </Text>
        </VStack>
        <VStack>
          <Text fontSize={"4xl"} color="red">
            Linux
          </Text>
          <Text fontSize={"3xl"} color="red">
            Windows
          </Text>
          <Text fontSize={"2xl"} color="red">
            Visual Studio Code
          </Text>
          <Text fontSize={"xl"} color="red">
            Intellij IDEA
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};
