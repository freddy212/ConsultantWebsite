import { Container, Heading } from "@chakra-ui/react";
import { ContactForm } from "../components/ContactForm";
import { Testimonials } from "../components/Testimonials";
import BlockchainDevSection from "../components/Blockchain Section/BlockchainSection";
export const BlockchainPage = () => {
  return (
    <Container maxW={"6xl"} py={12}>
      <BlockchainDevSection />
    </Container>
  );
};
