import SearchIcon from "../assets/icons/search.svg";

export const Search = () => {
  return (
    <form className="bg-searchBackground rounded flex p-2 w-full mr-5 text-sm xl:text-base">
      <input
        type="text"
        placeholder="Search for anything"
        className="bg-transparent ml-5 focus:outline-none flex-grow "
      />
      <SearchIcon />
    </form>
  );
};
