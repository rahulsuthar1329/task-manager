import { useState } from "react";
import Searchbar from "./Searchbar";
import Logo from "./Logo";
const Sidebar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="sm:w-screen md:w-1/4 bg-gray-800 h-screen px-4 py-5">
      <div className="flex flex-col justify-center items-center space-y-2">
        <Logo />
        <Searchbar query={query} setQuery={setQuery} />
      </div>
    </div>
  );
};

export default Sidebar;
