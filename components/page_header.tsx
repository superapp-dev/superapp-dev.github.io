import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

interface PageProps {
  title: string;
  subtitle: string;
  breadcrumbs: string;
}

export const PageHeader = ({ subtitle, title, breadcrumbs }: PageProps) => (
  <Box as="section" bg="bg.surface" py={{ base: "16", md: "16" }}>
    <Container>
      <Stack spacing={{ base: "4", md: "6" }} align="center" textAlign="center">
        <Stack spacing="3">
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="medium"
            color="accent"
          >
            {breadcrumbs}
          </Text>
          <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold">
            {title}
          </Heading>
        </Stack>
        <Text color="fg.muted" fontSize={{ base: "lg", md: "xl" }} maxW="3xl">
          {subtitle}
        </Text>
      </Stack>
    </Container>
  </Box>
);
