import Image from "next/image";
import { getProductById } from "../api/getProductById";
import StarIcon from "../assets/icons/star.svg";

export const ReviewCard = () => {
  const review = {
    productId: 1,
    id: 2,
    name: "Jhon Wick",
    position: "Manager",
    stars: 3.3,
    content:
      "Nunc in mollis lorem, eget gravida ex. Nulla id leo nibh. Duis volutpat magna nunc, vel dapibus metus luctus Nulla in nisl sit amet ex dictum mollis. Curabitur ultricies odio turpis, a ullamcorpe mauris posuere Integer vestibulum sem in nulla fermentum vulputate.",
  };

  const product = getProductById(review.productId);

  return (
    <div className="grid grid-cols-3 gap-4 bg-backgroundSecondary rounded-xl">
      <Image
        src={product.images[0]}
        height={200}
        width={300}
        layout="responsive"
        className="aspect-square"
        alt="Product photo"
      />
      <div className="w-[75%] col-span-2 py-12 pl-12">
        <p>{review.content}</p>
        <div className="pt-10 flex items-center justify-between">
          <p className="font-bold">
            {review.name} {review.position && `- ${review.position}`}
          </p>
          <div className="flex gap-2">
            {" "}
            {Array.from({ length: review.stars }).map((_, index) => (
              <StarIcon key={index} />
            ))}
            ({review.stars})
          </div>
        </div>
      </div>
    </div>
  );
};
