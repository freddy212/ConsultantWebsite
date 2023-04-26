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
      <Heading mt="2rem">Contact me below</Heading>
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <HStack alignItems="center">
                        <MdPhone color="#1970F1" size="20px" />
                        <Text fontSize="md" fontWeight={"bold"}>
                          +4526585350
                        </Text>
                      </HStack>
                      <HStack alignItems="center">
                        <MdEmail color="#1970F1" size="20px" />
                        <Text fontSize="md" fontWeight={"bold"}>
                          frederikbjornconsulting@gmail.com
                        </Text>
                      </HStack>
                      <HStack alignItems="center">
                        <MdLocationOn color="#1970F1" size="20px" />
                        <Text fontSize="md" fontWeight={"bold"}>
                          Aarhus, Denmark
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <form onSubmit={onSubmit}>
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              onChange={(event) =>
                                setName(event.currentTarget.value)
                              }
                              value={name}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="email">
                          <FormLabel>Your Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              onChange={(event) =>
                                setEmail(event.currentTarget.value)
                              }
                              value={email}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Your Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                            onChange={(event) =>
                              setMessage(event.currentTarget.value)
                            }
                            value={message}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                            type="submit"
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
