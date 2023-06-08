"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Img,
  useBreakpointValue
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { ResourcesPopover } from "./resource_popover";

export const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section">
      <Box as="nav" bg="bg.surface" boxShadow="sm">
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            <Img src={"/assets/logo.png"} alt="logo" height={6} />
            {isDesktop ? (
              <>
                <ButtonGroup variant="text" colorScheme="gray" spacing="8">
                  <Button isActive>Product</Button>
                  <Button>Pricing</Button>
                  <ResourcesPopover />
                  <Button>Support</Button>
                </ButtonGroup>
                <HStack spacing="3">
                  <Button variant="tertiary">Sign in</Button>
                  <Button variant="primary">Sign up</Button>
                </HStack>
              </>
            ) : (
              <IconButton
                variant="tertiary"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
