import { BorderProps, Stack, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

export const TechnologyBoxContent = ({
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
      _hover={{
        backgroundColor: useColorModeValue("gray.200", "gray.200"),
        boxShadow: "2px 2px 100px rgba(0, 0, 0, 0.25)",
      }}
      transition="background-color 0.5s, box-shadow 0.5s"
    >
      {children}
    </Stack>
  );
};
