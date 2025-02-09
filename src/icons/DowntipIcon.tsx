import { FaAngleDown } from "react-icons/fa";

interface DowntipIconProps {
  size: number;
  color?: string;
}

const DowntipIcon: React.FC<DowntipIconProps> = ({
  size,
  color = "#f1f1f1",
}) => {
  return (
    <div className={`flex items-center text-sm text-[${color}}]`}>
      <FaAngleDown size={size} color={color} />
    </div>
  );
};

export default DowntipIcon;
