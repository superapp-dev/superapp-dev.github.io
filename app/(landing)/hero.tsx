"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const Hero = () => (
  <Container pt={{ md: "1px" }}>
    <Box as="section" bg="bg.surface">
      <Box position="relative" height={{ lg: "720px" }}>
        <Container py={{ base: "16", md: "24" }} height="full">
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "16" }}
            align={{ lg: "center" }}
            height="full"
          >
            <Stack spacing={{ base: "8", md: "12" }}>
              <Stack spacing="4">
                <Link href={"/blog/why-we-are-opensource"}>
                  <Badge
                    colorScheme="gray"
                    alignSelf="start"
                    size={{ base: "md", md: "lg" }}
                    fontWeight={900}
                  >
                    How are we opensource?
                  </Badge>
                </Link>
                <Stack
                  spacing={{ base: "4", md: "6" }}
                  maxW={{ md: "xl", lg: "md", xl: "xl" }}
                >
                  <Heading size={{ base: "md", md: "xl" }}>
                    {/* Supercharge your development process with our cutting-edge tools. */}
                    Create your app remarkable fast
                  </Heading>
                  <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted">
                    Enterprise ready software suit build for scale & speed.
                    Create remarkable apps faster than ever, elevate your
                    customer service and deliver exceptional experience.
                  </Text>
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} spacing="3" justifyContent={'start'}>
                <Link href="/learn" target="_blank">
                  <Button
                    variant="secondary"
                    size={{ base: "lg", md: "xl" }}
                  >Get Started</Button>
                </Link>
                {/* <Link href="/sign_up">
                  <Button variant="primary" size={{ base: "lg", md: "xl" }}>
                    Try now
                  </Button>
                </Link> */}
              </Stack>
            </Stack>
            <Box
              pos={{ lg: "absolute" }}
              right="0"
              bottom="0"
              w={{ base: "full", lg: "50%" }}
              height={{ base: "96", lg: "full" }}
              sx={{
                clipPath: { lg: "polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)" },
              }}
            >
              <Img
                boxSize="full"
                objectFit="cover"
                src="https://img.freepik.com/premium-vector/funnel-low-poly-wireframe-isolated-black-white-background-abstract-mash-line-point-origami_201274-145.jpg?w=1800"
                alt="Lady at work"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  </Container>
);
