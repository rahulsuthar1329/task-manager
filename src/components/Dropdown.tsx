import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {
  options: string[];
  defaultValue?: string;
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue,
  onSelect,
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

  // Handle keyboard navigation
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
      onSelect(selected);
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        className="w-full px-4 py-2 flex justify-between items-center bg-[#1a1e2b] text-white border border-[#2d3445] rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 transition-all"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        {selected}
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
                onSelect(option);
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
