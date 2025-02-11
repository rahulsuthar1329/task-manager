interface ButtonProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, size = "lg" }) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-blue-600 hover:bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
      style={{ width: size === "sm" ? "150px" : "100%" }}
      type="button"
    >
      {title}
    </button>
  );
};

export default Button;
