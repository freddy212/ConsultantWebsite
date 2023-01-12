import { ReactNode } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

export const Testimonials = () => {
  return (
    <Box mt="2rem" mb="2rem">
      <Heading>I do in-person programming tutorials! </Heading>
      <Text>Do some of these statements describe you?</Text>
      <HStack spacing="2rem" mt="2rem" mb="2rem">
        <Box>
          <TestimonialContent>
            <TestimonialHeading>
              I don't know what to study after the gymnasium!
            </TestimonialHeading>
            <TestimonialText>
              I'm not sure what to study after the gymnasium, and i want to
              explore if programming is for me.
            </TestimonialText>
          </TestimonialContent>
        </Box>
        <Box>
          <TestimonialContent>
            <TestimonialHeading>I need to pass my exam!</TestimonialHeading>
            <TestimonialText>
              I have a programming course in the university, which i need help
              to pass
            </TestimonialText>
          </TestimonialContent>
        </Box>
        <Box>
          <TestimonialContent>
            <TestimonialHeading>
              I'm curious about programming!
            </TestimonialHeading>
            <TestimonialText>
              I've always been interested in trying out programming, but i need
              a friendly push
            </TestimonialText>
          </TestimonialContent>
        </Box>
      </HStack>

      <Heading mb="2rem">
        Let me know if this describes you, or something entirely different is
        your goal!
      </Heading>
      <Heading>First session is free!</Heading>
    </Box>
  );
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"} textAlign="center">
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};
