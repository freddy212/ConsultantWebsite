import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { ContactForm } from "../components/ContactForm";
import { TechnologyBox } from "../components/TechnologyBox";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      ></Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export const HomePage = () => {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Frederik Bjørn Groben Nielsen</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Software Consultant for hire!
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Software Development"}
            />
            <Feature
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Blockchain Development"}
            />
            <Feature
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Programming Tutoring"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
      <TechnologyBox />
      <ContactForm />
    </Container>
  );
};
