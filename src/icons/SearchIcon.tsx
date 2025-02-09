import { MdSearch } from "react-icons/md";

interface SearchIconProps {
  size: number;
  color?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ size, color = "#f1f1f1" }) => {
  return (
    <div>
      <MdSearch size={size} color={color} />
    </div>
  );
};

export default SearchIcon;
