// FullStackSection.js
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
import FullStackTypicalTasks from "./FullStackTypicalTasks";

const FullStackSection = () => {
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
          Full Stack Development
        </Heading>
        <VStack spacing={4} align="start">
          <Text>
            As a{" "}
            <Text as="span" fontWeight="bold">
              Full stack software developer
            </Text>
            , I have the drive and skills to take your project from concept to
            completion. My skill set includes expertise in the following
            technologies:
          </Text>
          <List spacing={1}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                Kotlin
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                Java
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                C#
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                Go
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                Node.js
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                React
              </Text>
            </ListItem>
          </List>
          <Text>
            With these tools, I can develop{" "}
            <Text as="span" fontWeight="bold">
              end-to-end solutions
            </Text>{" "}
            that meet your specific needs. Whether it's building responsive web
            applications, creating robust back-end systems, or implementing
            scalable solutions, I am confident in my ability to deliver
            high-quality results on time and within budget.
          </Text>
          <Text>
            If you're looking for a dedicated and skilled developer to bring
            your project to life, please feel free to reach out. I would be more
            than happy to discuss your requirements, and learn more about your
            needs and vision for the project/product.
          </Text>
        </VStack>
        <FullStackTypicalTasks />
      </Box>
      <ContactForm />;
    </Box>
  );
};

export default FullStackSection;
