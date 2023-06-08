"use client";
import { PageHeader } from "@/components/page_header";
import { Container, Stack, useBreakpointValue } from "@chakra-ui/react";
import { Pricing } from "../(landing)/pricing";
import { products } from "@/data/pricing";
import { ProductOverviewTable } from "./ProductOverviewTable";
import { ProductFeaturesTable } from "./ProductFeaturesTable";
import { ProductCallToActionTable } from "./ProductCallToActionTable";

export default function Page() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container>
      <PageHeader
        title="Free app for everyone"
        subtitle="Use free forever (with generous usage limits). Or pay per use and get unrestricted access to everything."
        breadcrumbs="pricing"
      />
      <Stack>
        {isMobile ? (
          <Stack spacing="16">
            {products.map((product, id) => (
              <Container px={{ base: "0" }} key={id}>
                <Stack spacing={{ base: "5", md: "7" }}>
                  <ProductOverviewTable products={[product]} />
                  <ProductFeaturesTable products={[product]} />
                  <ProductCallToActionTable products={[product]} />
                </Stack>
              </Container>
            ))}
          </Stack>
        ) : (
          <Container px={{ base: "0", lg: "8" }}>
            <Stack spacing={{ base: "5", md: "7" }}>
              <ProductOverviewTable products={products} />
              <ProductFeaturesTable products={products} />
              <ProductCallToActionTable products={products} />
            </Stack>
          </Container>
        )}
      </Stack>
    </Container>
  );
}
