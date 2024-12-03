import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { MainBar } from "./components/MainBar";
import { Providers } from "./components/Providers";
import { ThirdBar } from "./components/ThirdBar";
import { TopBar } from "./components/TopBar";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  style: "normal",
});
export const metadata = {
  title: "Electronic Shop - Live Preview - Damian Gebala",
  description: "New page for electronic shop!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} flex flex-col min-h-[100dvh]`}>
        <Providers>
          <TopBar />

          <MainBar />
          <ThirdBar />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
