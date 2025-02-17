import { handleChange } from "../utils/stateUtils";

interface TextInputProps {
  type?: string;
  state: string | number;
  label: string;
  placeholder?: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  label,
  state,
  setState,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        value={state}
        onChange={handleChange(setState)}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
