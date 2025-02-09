import { RxCross2 } from "react-icons/rx";

interface CancelIconProps {
  size: number;
  color?: string;
  onClick: () => void;
}

const CancelIcon: React.FC<CancelIconProps> = ({
  size,
  color = "#f1f1f1",
  onClick,
}) => {
  return (
    <div
      className={`flex cursor-pointer hover:opacity-80 items-center text-sm text-[${color}}]`}
      onClick={onClick}
    >
      <RxCross2 size={size} color={color} />
    </div>
  );
};

export default CancelIcon;
