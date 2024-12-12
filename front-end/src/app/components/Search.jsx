import SearchIcon from "../assets/icons/search.svg";

export const Search = ({ className }) => {
  return (
    <form
      className={`bg-searchBackground rounded flex  w-full text-sm xl:text-base ${className}`}
    >
      <input
        type="text"
        placeholder="Search for anything"
        className="bg-transparent ml-5 focus:outline-none flex-grow "
      />
      <SearchIcon />
    </form>
  );
};
