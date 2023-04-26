import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";

const Links = ["About", "Consultancy", "Tutorials", "Contact"];
export default function Simple() {
  return (
    <Box px={4}>
      <Flex px={4} h={16} justify="space-between" alignContent={"center"}>
        <HStack
          spacing={12}
          alignSelf="center"
          align={"center"}
          w="100%"
          justify={"center"}
        >
          <Link href="/">
            <Text fontSize={"3xl"}>Home</Text>
          </Link>
          <Link href={"/fullstack"}>
            <Text fontSize={"3xl"}>Full Stack Development</Text>
          </Link>
          <Link href={"/mobile"}>
            <Text fontSize={"3xl"}>Mobile Development</Text>
          </Link>
          <Link href={"/blockchain"}>
            <Text fontSize={"3xl"}>Blockchain Development</Text>
          </Link>
          <Link href={"/tutorials"}>
            <Text fontSize={"3xl"}>Tutorials</Text>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
