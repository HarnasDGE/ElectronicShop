import Image from "next/image";
import { OurStories } from "../components/OurStories";
import { WidthWrapper } from "../components/WidthWrapper";
import { SubPageBar } from "../components/SubPageBar";
import { HowWeWork } from "../components/HowWeWork";
import { Companies } from "../components/Companies";
import { Instagram } from "../components/Instagram";
import { BarAppears } from "../components/BarAppears";

export default function Home() {
  return (
    <main className="flex-grow ">
      <BarAppears />
      <SubPageBar title="About Us" />
      <WidthWrapper className="flex flex-col gap-20 py-20">
        <Image
          src="/images/about-us/main.jpg"
          width={400}
          height={200}
          layout="responsive"
          className="aspect-video rounded-2xl shadow-normal"
          alt="Image Hero"
        />
        <OurStories />
        <HowWeWork />
        <Companies />
      </WidthWrapper>
      <Instagram />
    </main>
  );
}
