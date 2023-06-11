"use client";
import { PageHeader } from "@/components/page_header";
import { Container } from "@chakra-ui/react";

export default function Page() {
  return (
    <Container minH={"100vh"}>
      <PageHeader
        title="Resources"
        subtitle="Getting started with Superapp"
        breadcrumbs="learn"
      />
      <h1>Your content goes here</h1>
    </Container>
  );
}
