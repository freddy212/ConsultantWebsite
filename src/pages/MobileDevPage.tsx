import { Container, Heading } from "@chakra-ui/react";
import { ContactForm } from "../components/ContactForm";
import { Testimonials } from "../components/Testimonials";
import MobileDevSection from "../components/Mobile Development Section/MobDevSection";

export const MobileDevPage = () => {
  return (
    <Container maxW={"6xl"} py={12}>
      <MobileDevSection />
    </Container>
  );
};
