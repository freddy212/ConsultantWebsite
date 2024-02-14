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
  Box,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { ContactForm } from "../components/ContactForm";
import { Pricing } from "../components/Pricing";
import { TechnologyBox } from "../components/TechnologyBox";
import CVBar from "../components/CVBar";

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
      <Heading>Frederik Bjørn Groben Nielsen</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} justifyContent={["center", null]}>
          <Heading color={"blackAlpha.600"}>
            {" "}
            Software Consultant for hire!
          </Heading>
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
              iconBg={useColorModeValue("red.100", "red.900")}
              text={"Mobile Development"}
            />
            <Feature
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Blockchain Development"}
            />
          </Stack>
        </Stack>
        <Box justifySelf={["center", "end"]}>
          <Image rounded={"md"} alt={"feature image"} src={"/billede.jpg"} />
        </Box>
      </SimpleGrid>
      <CVBar />
      <TechnologyBox />
    </Container>
  );
};
