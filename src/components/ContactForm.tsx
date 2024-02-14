import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Center,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import React, { useState } from "react";
import { send } from "emailjs-com";
import { useToast } from "@chakra-ui/react";

export const ContactForm = () => {
  /*const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
  });*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    send(
      "service_p03z478",
      "template_m3d742z",
      { from_name: name, email: email, message: message },
      "6JkXpmnGYvcgFkXRK"
    )
      .then((response) => {
        setName("");
        setEmail("");
        setMessage("");

        toast({
          title: "Message sent",
          description: "The message was successfully sent",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Heading mt="2rem">Contact me</Heading>
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 5 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Center py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3}>
                      <HStack alignItems="center">
                        <MdEmail color="#1970F1" size="20px" />
                        <Text fontSize="lg" fontWeight={"bold"}>
                          frederikbjornconsulting@gmail.com
                        </Text>
                      </HStack>
                      <HStack alignItems="center">
                        <MdLocationOn color="#1970F1" size="20px" />
                        <Text fontSize="md" fontWeight={"bold"}>
                          Aarhus, Denmark
                        </Text>
                      </HStack>
                      <HStack alignItems="center">
                        <MdPhone color="#1970F1" size="20px" />
                        <Text fontSize="lg" fontWeight={"bold"}>
                          +4526585350
                        </Text>
                      </HStack>
                    </VStack>
                  </Center>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
