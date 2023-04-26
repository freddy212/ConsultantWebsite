// TypicalMobileTasksSection.js
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

const MobDevTypicalTasks = () => {
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
            Designing and developing responsive and user-friendly mobile
            applications
          </ListItem>
          <ListItem>
            Integrating mobile apps with REST APIs and third-party services
          </ListItem>
          <ListItem>
            Developing native Android applications using Kotlin or Java
          </ListItem>
          <ListItem>
            Developing cross-platform applications using React Native
          </ListItem>
          <ListItem>
            Implementing push notifications and other real-time features
          </ListItem>
          <ListItem>
            Debugging and resolving application crashes and performance issues
          </ListItem>
        </UnorderedList>
      </VStack>
    </Box>
  );
};

export default MobDevTypicalTasks;
