import Link from "next/link";
import { checkAvailableCapacities } from "../utilities/checkAvailableCapacities";

export const ProductCapacities = ({ group, selectedCapacity }) => {
  const availableCapacities = checkAvailableCapacities(group);

  return (
    <div className="pt-5">
      <div className="flex flex-wrap gap-4 items-center">
        <p>
          Capacity: <span className="font-bold">{selectedCapacity}</span>
        </p>
        <ul className="flex flex-wrap gap-2">
          {availableCapacities.map((capacity) => {
            const productId = group.find(
              (product) => product.capacity === capacity
            ).id;

            return (
              <li key={capacity}>
                <Link
                  className={`border-2 py-1 px-3 text-gray ${
                    capacity === selectedCapacity ? "text-secondText" : ""
                  }`}
                  href={`/product/${productId}`}
                >
                  {capacity}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
