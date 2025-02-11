import { MdDeleteOutline } from "react-icons/md";

interface DeleteIconProps {
  size: number;
  color?: string;
  onClick: () => void;
}

const DeleteIcon: React.FC<DeleteIconProps> = ({
  size,
  color = "#f1f1f1",
  onClick,
}) => {
  return (
    <div
      className={`flex cursor-pointer hover:bg-gray-700 rounded-full p-1 items-center text-sm text-[${color}}]`}
      onClick={onClick}
    >
      <MdDeleteOutline size={size} color={color} />
    </div>
  );
};

export default DeleteIcon;
