import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export const Pricing = () => {
  return (
    <Box>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          My hourly rate
        </Heading>
      </VStack>
      <PriceWrapper>
        <Box py={4} px={12}>
          <HStack justifyContent="center">
            <Text fontSize="5xl" fontWeight="900">
              500
            </Text>
            <Text fontSize="3xl" fontWeight="600">
              kr
            </Text>
            <Text fontSize="3xl" color="gray.500">
              i timen
            </Text>
          </HStack>
        </Box>
      </PriceWrapper>
    </Box>
  );
};
