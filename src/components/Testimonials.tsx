import { ReactNode } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  HStack,
  BorderProps,
} from "@chakra-ui/react";

export const Testimonials = () => {
  return (
    <Box mt="2rem" mb="2rem" textAlign={"center"}>
      <Heading>I do in-person programming tutorials! </Heading>
      <Text>Do some of these statements describe you?</Text>
      <Stack spacing="2rem" mt="2rem" mb="2rem" direction={["column", "row"]}>
        <TestimonialContent>
          <TestimonialHeading>
            I don't know what to study after high school!
          </TestimonialHeading>
          <TestimonialText>
            I'm not sure what to study after high school, and want to explore if
            programming is for me.
          </TestimonialText>
        </TestimonialContent>
        <TestimonialContent>
          <TestimonialHeading>
            I need to pass my university exam!
          </TestimonialHeading>
          <TestimonialText>
            I have a programming course at university, which I need help to pass
          </TestimonialText>
        </TestimonialContent>
        <TestimonialContent>
          <TestimonialHeading>
            I'm curious about programming!
          </TestimonialHeading>
          <TestimonialText>
            I've always been interested in trying out programming, but I need a
            friendly push
          </TestimonialText>
        </TestimonialContent>
      </Stack>

      <Text mb="2rem">
        Let me know if this describes you, or something entirely different is
        your goal. First session is free!
      </Text>
    </Box>
  );
};

export const TestimonialContent = ({
  borderProps,
  children,
}: {
  borderProps?: BorderProps;
  children: ReactNode;
}) => {
  return (
    <Stack
      {...borderProps}
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
