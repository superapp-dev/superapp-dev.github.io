"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Img,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "./logo";

export const Footer = () => (
  <Box bg="bg.accent.default" color="fg.accent.default">
    <Container as="footer" role="contentinfo">
      <Stack
        spacing="8"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        py={{ base: "12", md: "16" }}
      >
        <Stack spacing={{ base: "6", md: "8" }} align="start">
          <Img src={"/assets/logo_white.png"} alt="logo" height={8} />

          <Text color="fg.accent.muted">
            Create beautiful websites remarkably fast.
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column-reverse", md: "column", lg: "row" }}
          spacing={{ base: "12", md: "8" }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="fg.accent.subtle"
              >
                Product
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="text.accent">How it works</Button>
                <Button variant="text.accent">Pricing</Button>
                <Button variant="text.accent">Use Cases</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="fg.accent.subtle"
              >
                Legal
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="text.accent">Privacy</Button>
                <Button variant="text.accent">Terms</Button>
                <Button variant="text.accent">License</Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing="4">
            <Text fontSize="sm" fontWeight="semibold" color="fg.accent.subtle">
              Stay up to date
            </Text>
            <Stack
              spacing="4"
              direction={{ base: "column", sm: "row" }}
              maxW={{ lg: "360px" }}
            >
              <Input
                placeholder="Enter your email"
                type="email"
                required
                variant="outline-on-accent"
              />
              <Button variant="primary.accent" type="submit" flexShrink={0}>
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider borderColor="bg.accent.subtle" />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
      >
        <Text fontSize="sm" color="fg.accent.subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
          reserved.
        </Text>
        <ButtonGroup variant="tertiary.accent">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
);
