import DinosaurIcon from "./assets/icons/dinosaur.svg";
import { BackButton } from "./components/BackButton";
import { CtaThird } from "./components/CtaThird";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center gap-8 py-20">
        <DinosaurIcon />
        <h1>404 Error Not Found</h1>
        <p className="w-1/2 text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal.
        </p>
        <BackButton />
      </div>
      <CtaThird />
    </main>
  );
}
