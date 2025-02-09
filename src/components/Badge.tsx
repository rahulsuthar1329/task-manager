import { BadgeType } from "../types";
import { getColor } from "../utils/badgeUtils";

interface BadgeProps {
  label: string;
  type: BadgeType;
}

const Badge: React.FC<BadgeProps> = ({ label, type }) => {
  const color = getColor(type);
  const style = { backgroundColor: color + "30", color };
  return (
    <div style={style} className="w-fit px-2 py-[1px] rounded-full text-[10px]">
      {label}
    </div>
  );
};

export default Badge;
