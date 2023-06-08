"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Img,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { PopoverItem } from "./popover_item";
import { INav } from "@/interfaces/INav";
import Link from "next/link";
import { data } from "@/data/header";

export const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "1", md: "1" }}>
      <Box as="nav" bg="bg.surface" boxShadow="sm">
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            <Link href="/">
              <Img src={"/assets/logo.png"} alt="logo" height={6} />
            </Link>
            {isDesktop ? (
              <>
                <ButtonGroup variant="text" colorScheme="gray" spacing="8">
                  {data.map((item: INav) => (
                    <HeaderItem item={item} key={item.title} />
                  ))}
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

const HeaderItem = ({ item }: { item: INav }) => {
  if (item.children && item.children.length > 0) {
    return <PopoverItem item={item} />;
  } else {
    return item.href ? (
      <Link key={item.title} href={item.href} className="chakra-button">
        <Button>{item.title}</Button>
      </Link>
    ) : (
      <Button key={item.title}>{item.title}</Button>
    );
  }
};
