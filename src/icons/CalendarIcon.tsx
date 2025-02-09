import { MdOutlineCalendarMonth } from "react-icons/md";

interface CalendarIconProps {
  size: number;
  color?: string;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({
  size,
  color = "#f1f1f1",
}) => {
  return (
    <div>
      <MdOutlineCalendarMonth size={size} color={color} />
    </div>
  );
};

export default CalendarIcon;
