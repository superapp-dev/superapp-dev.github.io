import { Header } from "@/components/navbar/navbar";
import { Sora } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Newsletter } from "./(landing)/newsletter";
import { Footer } from "./(landing)/footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Superapp - Accelerate your product journey",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Providers>
          <Header />
          {children}
          <Newsletter />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
