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

const FullStackTypicalTasks = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Box p={8} my={8} textColor={textColor}>
      <Heading mb={6} textAlign="center">
        Examples of services i can provide:
      </Heading>
      <VStack spacing={4} align="start">
        <UnorderedList spacing={2}>
          <ListItem>Creating interactive and intuitive dashboards</ListItem>
          <ListItem>Developing, documenting, and testing REST APIs</ListItem>
          <ListItem>
            Integrating third-party services and APIs into web applications
          </ListItem>
          <ListItem>
            Designing and implementing responsive user interfaces
          </ListItem>
          <ListItem>
            Collaborating with cross-functional teams to deliver projects on
            time and within budget
          </ListItem>
        </UnorderedList>
      </VStack>
    </Box>
  );
};

export default FullStackTypicalTasks;
