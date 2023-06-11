"use client";
import { PageHeader } from "@/components/page_header";
import { Container } from "@chakra-ui/react";

export default function Page() {
  return (
    <Container minH={"100vh"}>
      <PageHeader
        title="How it works"
        subtitle=""
        breadcrumbs="How?"
      />
      <h1>Your content goes here</h1>
    </Container>
  );
}
