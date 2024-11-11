import FilterIcon from "../assets/icons/filter.svg";
import Sort1Icon from "../assets/icons/sort1.svg";
import Sort2Icon from "../assets/icons/sort2.svg";
import Sort3Icon from "../assets/icons/sort3.svg";
import Sort4Icon from "../assets/icons/sort4.svg";
import Sort5Icon from "../assets/icons/sort5.svg";
export const OptionProducts = () => {
  return (
    <div className="flex items-center py-6 border-b-2">
      <p className="flex-grow">Showing 1 - 15 of 50 Results</p>
      <div className="flex gap-6 items-center">
        <div className="flex gap-2 items-center">
          Filter <FilterIcon />
        </div>
        <ul className="flex gap-2 items-center">
          <li>
            <Sort1Icon />
          </li>
          <li>
            <Sort2Icon />
          </li>
          <li>
            <Sort3Icon />
          </li>
          <li>
            <Sort4Icon />
          </li>
          <li>
            <Sort5Icon />
          </li>
        </ul>
      </div>
    </div>
  );
};
