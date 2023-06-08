"use client";
import { PageHeader } from "@/components/page_header";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Page() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container>
      <PageHeader
        title="Help & Support"
        subtitle="Get in touch and let us know how we can help."
        breadcrumbs="Contact us"
      />
      <Box
        bg="bg.surface"
        borderRadius="lg"
        flex="1"
        boxShadow={'sm'}
        pb={{ base: "16", md: "24" }}
      >
        <Flex direction={"column"} width={"lg"} margin="0px auto">
          <FormControl id="subject" py={4}>
            <FormLabel>Subject</FormLabel>
            <InputGroup>
              <Input defaultValue="" autoFocus borderColor={"blackAlpha.800"} />
            </InputGroup>
          </FormControl>
          <FormControl id="message" py={4}>
            <FormLabel>Message</FormLabel>
            <Textarea rows={6} resize="none" borderColor={"blackAlpha.800"} />
            <FormHelperText color="fg.subtle">
              Write a short introduction about yourself
            </FormHelperText>
          </FormControl>
          <Button type="submit" variant="primary" width={"lg"} py={"6"}>
            Submit ticket
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
