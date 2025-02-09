import { MdAdd } from "react-icons/md";

interface AddIconProps {
  size: number;
  color?: string;
}

const AddIcon: React.FC<AddIconProps> = ({ size, color = "#f1f1f1" }) => {
  return (
    <div className={`flex items-center text-sm text-[${color}}]`}>
      <MdAdd size={size} color={color} />
    </div>
  );
};

export default AddIcon;
