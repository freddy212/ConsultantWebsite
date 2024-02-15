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
  border,
  Link,
} from "@chakra-ui/react";
import { BorderProps } from "@chakra-ui/react";
import { TechnologyBoxContent } from "./TechnologyBoxContent";
import { Link as RouterLink } from "react-router-dom";

export const TechnologyBox = () => {
  return (
    <Box px={4} mt="2rem" w="100%">
      <Heading fontSize={"6xl"} textAlign="center" mt="2rem" mb="2rem">
        {" "}
        Services I offer{" "}
      </Heading>
      <SimpleGrid
        columns={{ base: 0, md: 2 }}
        spacing={10}
        paddingTop="2rem"
        paddingBottom="2rem"
      >
        <Link
          as={RouterLink}
          to={"/fullstack"}
          textDecoration={"none"}
          _hover={{ textDecoration: "none" }}
        >
          <TechnologyBoxContent
            borderProps={{
              border: "8px",
              borderColor: useColorModeValue("yellow.100", "yellow.900"),
            }}
          >
            <Heading textAlign={"center"}>Full Stack Development!</Heading>
            <VStack>
              <Text fontSize={"4xl"}>Kotlin</Text>
              <Text fontSize={"3xl"}>Java</Text>
              <Text fontSize={"2xl"}>React</Text>
            </VStack>
          </TechnologyBoxContent>
        </Link>
        <Link
          as={RouterLink}
          to={"/mobile"}
          textDecoration={"none"}
          _hover={{ textDecoration: "none" }}
        >
          <TechnologyBoxContent
            borderProps={{
              border: "8px",
              borderColor: "red.100",
            }}
          >
            <Heading textAlign={"center"}>Mobile development!</Heading>
            <VStack>
              <Text fontSize={"4xl"}>Android</Text>
              <Text fontSize={"3xl"}>React Native</Text>
              <Text fontSize={"2xl"}>Jetpack Compose</Text>
            </VStack>
          </TechnologyBoxContent>
        </Link>
        <Link
          as={RouterLink}
          to={"/blockchain"}
          textDecoration={"none"}
          _hover={{ textDecoration: "none" }}
        >
          <TechnologyBoxContent
            borderProps={{
              border: "8px",
              borderColor: useColorModeValue("green.100", "green.900"),
            }}
          >
            <Heading textAlign={"center"}>Blockchain Development!</Heading>
            <VStack>
              <Text fontSize={"4xl"}>Algorand</Text>
              <Text fontSize={"3xl"}>IPFS</Text>
              <Text fontSize={"2xl"}>Ethereum</Text>
            </VStack>
          </TechnologyBoxContent>
        </Link>
      </SimpleGrid>
    </Box>
  );
};
