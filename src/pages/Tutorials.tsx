import { Container, Heading } from "@chakra-ui/react";
import { ContactForm } from "../components/ContactForm";
import { Testimonials } from "../components/Testimonials";

export const Tutorials = () => {
  return (
    <Container maxW={"6xl"} py={12}>
      <Testimonials />
      <ContactForm />
    </Container>
  );
};
