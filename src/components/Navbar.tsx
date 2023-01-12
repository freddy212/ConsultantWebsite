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
} from "@chakra-ui/react";

const Links = ["About", "Consultancy", "Tutorials", "Contact"];
export default function Simple() {
  return (
    <Box bg={useColorModeValue("gray.200", "gray.900")} px={4}>
      <Flex px={4} h={16} justify="space-between" alignContent={"center"}>
        <HStack
          spacing={6}
          alignSelf="center"
          align={"center"}
          w="100%"
          justify={"center"}
        >
          <Link href="/">Home</Link>
          <Link href={"/tutorials"}>Tutorials</Link>
        </HStack>
      </Flex>
    </Box>
  );
}
