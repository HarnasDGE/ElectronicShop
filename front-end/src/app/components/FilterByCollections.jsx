import Link from "next/link";
import ArrowIcon from "../assets/icons/arrowDown.svg";

export const FilterByCollections = () => {
  const collections = [
    {
      name: "Man",
      param: "man",
    },
    {
      name: "Woman",
      param: "woman",
    },
    {
      name: "Kids",
      param: "kids",
    },
    {
      name: "Footwear",
      param: "footwear",
    },
    {
      name: "Accessories",
      param: "accessories",
    },
  ];
  return (
    <div>
      <h2 className="font-bold">Collection</h2>
      <ul>
        {collections.map((collection) => (
          <li
            key={collection}
            className="flex justify-between border-b-2 py-3 items-center"
          >
            <Link href={`/products?collection=${collection.param}`}>
              {collection.name}
            </Link>
            <ArrowIcon className="-rotate-90" />
          </li>
        ))}
      </ul>
    </div>
  );
};
