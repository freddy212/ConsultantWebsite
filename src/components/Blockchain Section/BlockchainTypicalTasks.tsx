import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

const BlockchainTypicalTasks = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Box p={8} my={8} textColor={textColor}>
      <Heading mb={6} textAlign="center">
        Examples of services i can provide:
      </Heading>
      <VStack spacing={4} align="start">
        <UnorderedList spacing={2}>
          <ListItem>
            Developing and deploying smart contracts on Ethereum and Algorand
          </ListItem>
          <ListItem>
            Creating decentralized applications (dApps) using popular frameworks
          </ListItem>
          <ListItem>
            Integrating blockchain solutions with existing systems and
            applications
          </ListItem>
          <ListItem>
            Utilizing InterPlanetary File System (IPFS) for decentralized
            storage
          </ListItem>
          <ListItem>
            Debugging and resolving issues with smart contracts and dApps
          </ListItem>
        </UnorderedList>
      </VStack>
    </Box>
  );
};

export default BlockchainTypicalTasks;
