"use client";
import {
  Box,
  Button,
  Container,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { LogoIcon } from "./logo_icon";
import { stats } from "@/data/why_us";
import Link from "next/link";

export const Stats = () => (
  <Container py={{ base: "16", md: "8" }}>
    <Box as="section" bg="bg.surface">
      <Container py={{ base: "16", md: "24" }}>
        <Stack spacing={{ base: "12", md: "16" }}>
          <Stack spacing={{ base: "4", md: "6" }}>
            <center>
              <Img src="/favicon.ico" width={10} />
            </center>
            <Stack
              spacing={{ base: "4", md: "5" }}
              textAlign="center"
              align="center"
            >
              <Heading size={{ base: "sm", md: "md" }}>
                Why you should use superapp?
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="fg.muted"
                maxW="3xl"
              >
                As a product owner / founder, focus on building your core
                product while we support your development and product team with
                easily customizable libraries and admin panels.
              </Text>
            </Stack>
          </Stack>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            columnGap="8"
            rowGap="10"
          >
            {stats.map((stat, id) => (
              <Box
                key={id}
                borderLeftWidth={{ base: "0", md: "2px" }}
                borderTopWidth={{ base: "2px", md: "0" }}
                borderColor="accent"
                px={{ md: "6" }}
                pt={{ base: "4", md: "0" }}
              >
                <Stack spacing="5">
                  <Stack spacing="1">
                    <Heading size="lg" color="accent">
                      {stat.value}
                    </Heading>
                    <Text color="fg.muted" fontSize="lg" fontWeight="medium">
                      {stat.label}
                    </Text>
                  </Stack>
                  <Link href={stat.link.href} target="_blank">
                    <Button
                      variant="text"
                      alignSelf="start"
                      rightIcon={<FiArrowRight fontSize="1.25rem" />}
                    >
                      {stat.link.label}
                    </Button>
                  </Link>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  </Container>
);
