"use client";
import {
  Box,
  Center,
  Container,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as logos from "./client_logos";

export const Clients = () => (
  <Container py={{ base: "4", md: "8" }}>
    <Box
      bg="bg.surface"
      py={{ base: "12", md: "16" }}
      px={{ base: "6", md: "16" }}
      borderRadius="lg"
      boxShadow="sm"
    >
      <Stack spacing="8">
        <Text
          fontWeight="medium"
          fontSize={{ base: "md", md: "lg" }}
          color="fg.muted"
          textAlign="center"
        >
          These and other companies trust us
        </Text>
        <SimpleGrid
          gap={{ base: "4", md: "8" }}
          columns={{ base: 2, md: 3, lg: 5 }}
        >
          <Center>
            <Img
              src="https://www.ihx.in/images/IHX-logo.png"
              alt="IHX"
              h={{ base: "8", md: "10" }}
              maxW="10rem"
            />
          </Center>
          <Center>
            <Img
              src="https://prabhaav.ai/static/media/Prabhaav%20Logo-white.4107c8e5752671863376.png"
              alt="Prabhaav"
              h={{ base: "8", md: "10" }}
              maxW="10rem"
            />
          </Center>
          {/* {Object.entries(logos).map(([name, Logo]) => (
            <Center key={name}>
              <Logo
                h={{ base: "8", md: "10" }}
                maxW="10rem"
                fill="fg.emphasized"
              />
            </Center>
          ))} */}
        </SimpleGrid>
      </Stack>
    </Box>
  </Container>
);
