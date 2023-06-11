"use client";

import { PageHeader } from "@/components/page_header";
import { Container } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function BlogHeader({ children }: { children: ReactElement }) {
  return (
    <Container minH={"100vh"}>
      <PageHeader
        title="Title"
        subtitle="sub title"
        breadcrumbs="Why are we opensource?"
      />
      {children}
    </Container>
  );
}
