  import { Clients } from "./clients";
import { CTA } from "./cta";
import { Features } from "./features";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Newsletter } from "./newsletter";
import { Pricing } from "./pricing";
import { Stats } from "./stats";
import { Team } from "./team";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
      <Stats />
      <Pricing />
      <Clients />
      <Team />
    </>
  );
}
