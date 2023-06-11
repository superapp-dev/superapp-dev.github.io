import { PageHeader } from "@/components/page_header";
import { Container } from "@chakra-ui/react";

export default function Page({ params }: any) {
  const { slug } = params;
  return (
    // <Container minH={"100vh"}>
    //   <PageHeader
    //     title="Title"
    //     subtitle="sub title"
    //     breadcrumbs="Why are we opensource?"
    //   />
    <h1>Your content goes here</h1>
    // </Container>
  );
}

export async function generateStaticParams() {
  return [{ slug: "why-we-are-opensource" }];
}
