import FilterIcon from "../assets/icons/filter.svg";
import Sort1Icon from "../assets/icons/sort1.svg";
import Sort3Icon from "../assets/icons/sort3.svg";
import { Button } from "./Button";
import { useSearchParams } from "next/navigation";

export const OptionProducts = ({
  productsLength,
  onFilterClick,
  onSidebarSideClick,
}) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const perPage = parseInt(searchParams.get("perPage")) || 8;

  const start = (page - 1) * perPage;
  const end = Math.min(start + perPage, productsLength);

  return (
    <div className="flex items-center py-3 px-3 xl:border-b-2">
      <p className="flex-grow p-0">
        {productsLength > 0
          ? `Showing ${start + 1} - ${end} of ${productsLength} Results`
          : "Showing 0 results"}
      </p>
      <div className="flex gap-6 items-center">
        <Button
          color="none"
          border={false}
          className="font-normal text-sm"
          onClick={onFilterClick}
        >
          Filter <FilterIcon />
        </Button>
        <ul className="flex gap-2 items-center hidden xl:flex">
          <li>
            <Button
              color="none"
              border={false}
              type="icon"
              onClick={() => onSidebarSideClick(false)}
            >
              <Sort1Icon />
            </Button>
          </li>

          <li>
            <Button
              color="none"
              type="icon"
              border={false}
              onClick={() => onSidebarSideClick("RIGHT")}
            >
              <Sort3Icon />
            </Button>
          </li>

          <li>
            <Button
              color="none"
              type="icon"
              border={false}
              onClick={() => onSidebarSideClick("LEFT")}
            >
              <Sort3Icon className="rotate-180" />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
