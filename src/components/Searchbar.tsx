import CancelIcon from "../icons/CancelIcon";
import { handleChange } from "../utils/stateUtils";
import SearchIcon from "./../icons/SearchIcon";

interface SearchbarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar: React.FC<SearchbarProps> = ({ query, setQuery }) => {
  return (
    <div className="flex space-x-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none text-[12px]">
      <SearchIcon size={20} />
      <input
        type="text"
        value={query}
        onChange={handleChange(setQuery)}
        placeholder="Search by task name, id"
        className="outline-none w-full"
      />
      {query && <CancelIcon size={15} onClick={() => setQuery("")} />}
    </div>
  );
};

export default Searchbar;
