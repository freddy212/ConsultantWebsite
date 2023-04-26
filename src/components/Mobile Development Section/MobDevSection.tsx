// MobileDevelopmentSection.js
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
import MobDevTypicalTasks from "./MobDevTypicalTasks";
import { ContactForm } from "../ContactForm";

const MobileDevSection = () => {
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
          Mobile Development
        </Heading>
        <VStack spacing={4} align="start">
          <Text>
            As a{" "}
            <Text as="span" fontWeight="bold">
              Mobile developer
            </Text>
            , I specialize in creating high-quality mobile applications for both
            Android and iOS platforms. My expertise in mobile development
            includes the following technologies:
          </Text>
          <List spacing={1}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                Android
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                Jetpack Compose
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={listItemColor} />
              <Text as="span" fontWeight="bold" color={highlightColor}>
                React Native
              </Text>
            </ListItem>
          </List>
          <Text>
            Using these technologies, I can develop cross-platform mobile
            applications that provide a seamless user experience, ensuring your
            app looks and performs great on both Android and iOS devices.
          </Text>
          <Text>
            If you're looking for a skilled mobile developer to create a
            feature-rich, user-friendly mobile application, please feel free to
            reach out. I would be more than happy to discuss your project
            requirements and help you turn your ideas into reality.
          </Text>
        </VStack>
        <MobDevTypicalTasks />
      </Box>
      <ContactForm />
    </Box>
  );
};

export default MobileDevSection;
