// BlockchainDevelopmentSection.js
import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { ContactForm } from "../ContactForm";
import BlockchainTypicalTasks from "./BlockchainTypicalTasks";

const BlockchainDevSection = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const listItemColor = useColorModeValue("teal.500", "teal.300");
  const highlightColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Box>
      <Box
        p={8}
        my={8}
        borderRadius="md"
        boxShadow="md"
        bgColor={bgColor}
        textColor={textColor}
      >
        <Heading mb={6} textAlign="center">
          Blockchain Development
        </Heading>
        <VStack spacing={4} align="start">
          <Text>
            As a{" "}
            <Text as="span" fontWeight="bold">
              Blockchain developer
            </Text>
            , I have experience working with various blockchain related
            technologies to create innovative and secure solutions. My expertise
            in blockchain development includes the following technologies:
          </Text>
          <List spacing={1}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                Algorand
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                PyTeal
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                Ethereum
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                IPFS
              </Text>
            </ListItem>
          </List>
          <Text>
            Using these technologies, I can help you develop decentralized
            applications (dApps), create and deploy smart contracts, and build
            secure and transparent blockchain-based solutions.
          </Text>
          <Text>
            If you're looking for a dedicated and skilled blockchain developer
            to bring your project to life, please feel free to reach out. I
            would be more than happy to discuss your requirements and help you
            achieve your goals.
          </Text>
        </VStack>
        <BlockchainTypicalTasks />
      </Box>
      <ContactForm />
    </Box>
  );
};

export default BlockchainDevSection;
