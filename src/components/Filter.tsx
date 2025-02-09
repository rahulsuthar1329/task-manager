import CalendarIcon from "./../icons/CalendarIcon";
import DowntipIcon from "./../icons/DowntipIcon";

interface FilterProps {
  date: string;
}

const Filter: React.FC<FilterProps> = ({ date = "DD.MM.YYYY" }) => {
  return (
    <div className="flex justify-between items-center space-x-2 rounded-lg w-[10rem] bg-gray-700 border-gray-600 py-2.5 px-3 cursor-pointer hover:bg-gray-600 select-none">
      <CalendarIcon size={18} color="#c5c5c5 " />
      <span className="text-[#c5c5c5] text-sm">{date}</span>
      <DowntipIcon size={15} color="#c5c5c5" />
    </div>
  );
};

export default Filter;
