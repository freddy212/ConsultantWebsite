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
    <Container maxW={"6xl"} py={12}>
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
        <Flex justifyContent="end">
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/billede.jpg"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
      <TechnologyBox />
      <Heading textAlign={"center"} mt="2rem" mb="2rem">
        Lets find out how i can help you and your business!
      </Heading>
      <ContactForm />
    </Container>
  );
};
