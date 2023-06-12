"use client";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export const CTA = () => (
  <Container py={{ base: "16", md: "8" }}>
    <Box
      bg="bg.accent.default"
      color="fg.accent.default"
      borderRadius="xl"
      px={{ base: "6", lg: "16" }}
      py={{ base: "10", lg: "16" }}
    >
      <Stack
        spacing="8"
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
      >
        <Stack spacing="4" maxW="2xl">
          <Heading size="sm">Ready to develop?</Heading>
          <Text color="fg.accent.muted" fontSize={{ base: "lg", lg: "xl" }}>
            Jumpstart your next product development with one of our pre-built
            libraries.
          </Text>
        </Stack>
        <Stack
          spacing="3"
          direction={{ base: "column", sm: "row" }}
          justify={{ base: "start" }}
        >
          <Link href="learn">
            <Button variant="secondary.accent" size="xl">
              Learn more
            </Button>
          </Link>
          <Link href="https://pro.superapp.dev/sign_up" target="_blank">
            <Button variant="primary.accent" size="xl">
              Sign up
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  </Container>
);
