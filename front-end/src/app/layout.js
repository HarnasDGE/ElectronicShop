import { MainBar } from "./components/MainBar";
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
      <body className={`${outfit.className}`}>
        <TopBar />
        <MainBar />
        {children}
      </body>
    </html>
  );
}
