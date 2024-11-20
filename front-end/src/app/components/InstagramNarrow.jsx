import Image from "next/image";
import { Divider } from "./Divider";

export const InstagramNarrow = () => {
  const instagramPhotos = [
    "/images/instagram/insta1.jpg",
    "/images/instagram/insta2.jpg",
    "/images/instagram/insta3.jpg",
    "/images/instagram/insta4.jpg",
    "/images/instagram/insta5.jpg",
    "/images/instagram/insta6.jpg",
    "/images/instagram/insta7.jpg",
    "/images/instagram/insta8.jpg",
    "/images/instagram/insta9.jpg",
    "/images/instagram/insta10.jpg",
  ];

  const instagramUrl = "/";
  return (
    <div className=" border-2 border-gray rounded-3xl pt-8 h-fit">
      <h2 className="text-2xl font-bold mb-6 px-7">Instagram</h2>
      <Divider />
      <div className="grid grid-cols-3 gap-6 p-6">
        {instagramPhotos.slice(0, 6).map((photo) => (
          <Image
            src={photo}
            key={photo}
            width={150}
            height={150}
            className="aspect-square object-fit rounded-2xl shadow-normal"
          />
        ))}
      </div>
    </div>
  );
};
