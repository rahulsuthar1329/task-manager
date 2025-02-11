import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  defaultValue?: string;
  setSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  defaultValue,
  setSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = options.indexOf(selected);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelected(options[(currentIndex + 1) % options.length]);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelected(
        options[(currentIndex - 1 + options.length) % options.length]
      );
    } else if (event.key === "Enter") {
      setIsOpen(false);
      setSelect(selected);
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>

      <button
        className="flex justify-between bg-gray-50 border outline-none text-left border-gray-300 text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        type="button"
      >
        <span>{selected}</span>
        <span
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-[#1a1e2b] border border-[#2d3445] rounded-lg shadow-lg z-50">
          {options.map((option) => (
            <li
              key={option}
              className={`px-4 py-2 text-white cursor-pointer transition-all ${
                selected === option ? "bg-[#2d3445]" : "hover:bg-[#2d3445]"
              }`}
              onClick={() => {
                setSelected(option);
                setSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
