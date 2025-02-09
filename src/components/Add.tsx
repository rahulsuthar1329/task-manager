import AddIcon from "./../icons/AddIcon";

interface AddProps {
  label: string;
  color?: string;
}

const Add: React.FC<AddProps> = ({ label, color = "#bdbdbd" }) => {
  return (
    <div className={`flex items-center space-x-1`}>
      <AddIcon size={18} color={color} />
      <span className={`text-sm font-semibold`} style={{ color }}>
        {label}
      </span>
    </div>
  );
};

export default Add;
