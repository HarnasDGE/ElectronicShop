import Image from "next/image";
import InstagramIcon from "../assets/icons/instagram.svg";

export const Instagram = () => {
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
    <ul className="relative flex gap-3 max-w-full overflow-hidden py-5">
      {instagramPhotos.slice(0, 7).map((photo, index) => (
        <Image
          key={photo}
          src={photo}
          width={300}
          height={300}
          className="w-[14.2%] aspect-square"
        />
      ))}

      <div className="absolute top-1/2 left-1/2 p-4 rounded-full bg-background">
        <InstagramIcon />
      </div>
    </ul>
  );
};
