import { PageHeader } from "@/components/page_header";
import { Container } from "@chakra-ui/react";
import BlogHeader from "./blog_header";

export default function Page({ params }: any) {
  const { slug } = params;
  return (
    <BlogHeader>
      <h1>Your content goes here</h1>
    </BlogHeader>
  );
}

export async function generateStaticParams() {
  return [{ slug: "why-we-are-opensource" }];
}
