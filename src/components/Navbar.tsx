import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  IconButton,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";

export default function Simple() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const location = useLocation(); // Use useLocation to get the current path

  // Function to check if the link is the current page
  const menuItemBgColor = (path: string) =>
    location.pathname === path ? "gray.200" : "white";

  return (
    <Box px={{ base: 2, sm: 4 }} py={4} bg="blackAlpha.300">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {isMobile ? (
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList>
              <MenuItem
                as={Link}
                href="/"
                sx={{
                  "&:focus": { bg: menuItemBgColor("/") },
                }}
              >
                Home
              </MenuItem>
              <MenuItem
                as={Link}
                href="/fullstack"
                bg={menuItemBgColor("/fullstack")}
              >
                Full Stack
              </MenuItem>
              <MenuItem
                as={Link}
                href="/mobile"
                bg={menuItemBgColor("/mobile")}
              >
                Mobile Development
              </MenuItem>
              <MenuItem
                as={Link}
                href="/blockchain"
                bg={menuItemBgColor("/blockchain")}
              >
                Blockchain
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <HStack
            spacing={{ base: 4, md: 6, lg: 8, xl: 10 }}
            w="100%"
            justify={"center"}
          >
            <Link href="/">
              <Text fontSize={{ base: "md", md: "xl", lg: "3xl" }}>Home</Text>
            </Link>
            <Link href="/fullstack">
              <Text fontSize={{ base: "md", md: "xl", lg: "3xl" }}>
                Full Stack Development
              </Text>
            </Link>
            <Link href="/mobile">
              <Text fontSize={{ base: "md", md: "xl", lg: "3xl" }}>
                Mobile Development
              </Text>
            </Link>
            <Link href="/blockchain">
              <Text fontSize={{ base: "md", md: "xl", lg: "3xl" }}>
                Blockchain Development
              </Text>
            </Link>
          </HStack>
        )}
      </Flex>
    </Box>
  );
}
