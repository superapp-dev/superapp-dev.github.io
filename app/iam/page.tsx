"use client";
import { PageHeader } from "@/components/page_header";
import { features } from "@/data/iam";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Img,
  SimpleGrid,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Page() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container>
      <PageHeader
        title="Authentication & Authorization"
        subtitle="Securely manage identities and access with opensource keycloak based services and resources."
        breadcrumbs="Setup in 5 minutes. With prebuilt opensource ui and libraries"
      />
      <Box
        bg="bg.surface"
        borderRadius="lg"
        flex="1"
        // boxShadow={"sm"}
        pb={{ base: "16", md: "24" }}
        // px={2}
      >
        <Flex margin="0px auto">
          <Flex direction={"column"}>
            <Heading
              as="h1"
              size="xs"
              color={"gray.700"}
              borderBottom={"3px solid"}
              width={"-webkit-fit-content"}
            >
              How it works
            </Heading>
            <Text
              color="blackAlpha.800"
              fontSize={{ base: "sm", md: "lg" }}
              py={"4"}
            >
              Superapp provides user federation, strong authentication, user
              management, fine-grained authorization, and more. Enabling login
              with social networks is easy to add through the admin console. Its
              just a matter of selecting the social network you want to add. No
              code or changes to your application is required.
            </Text>
            <Img src="https://d1.awsstatic.com/product-marketing/IAM/iam-how-it-works-diagram.04a2c4e4a1e8848155840676fa97ff2146d19012.png" />
          </Flex>
        </Flex>
        <Flex py={8}>
          <Flex direction={"column"}>
            <Heading
              as="h1"
              size="xs"
              color={"gray.700"}
              borderBottom={"3px solid"}
              width={"-webkit-fit-content"}
            >
              Features
            </Heading>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              columnGap={8}
              rowGap={{ base: 10, md: 10 }}
              py={{ base: "12", md: "16" }}
            >
              {features.map((feature) => (
                <Stack key={feature.name} spacing="4" direction="row">
                  <Square
                    size={{ base: "10", md: "10" }}
                    bg="accent"
                    color="fg.inverted"
                    borderRadius="lg"
                  >
                    <Icon as={feature.icon} boxSize={{ base: "5", md: "5" }} />
                  </Square>
                  <Stack spacing={{ base: "4", md: "5" }}>
                    <Stack spacing={{ base: "1", md: "2" }}>
                      <Text
                        fontSize={{ base: "lg", md: "md" }}
                        fontWeight="medium"
                      >
                        {feature.name}
                      </Text>
                      <Text fontSize={"xs"} color="fg.muted">
                        {feature.description}
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex py={8}>
          <Flex direction={"column"}>
            <Heading
              as="h1"
              size="xs"
              color={"gray.700"}
              borderBottom={"3px solid"}
              width={"-webkit-fit-content"}
            >
              Frontend
            </Heading>
          </Flex>
        </Flex>
        <Flex py={8}>
          <Flex direction={"column"}>
            <Heading
              as="h1"
              size="xs"
              color={"gray.700"}
              borderBottom={"3px solid"}
              width={"-webkit-fit-content"}
            >
              Backend
            </Heading>
            
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}
