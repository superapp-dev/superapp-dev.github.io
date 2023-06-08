  import { Stats } from "./stats";
import { CTA } from "./cta";
import { Features } from "./features";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { Pricing } from "./pricing";
import { Team } from "./team";
import { Clients } from "./clients";
import { Newsletter } from "./newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Stats />
      <Pricing />
      <Clients />
      <Team />
      <Newsletter />
      <Footer />
    </>
  );
}
