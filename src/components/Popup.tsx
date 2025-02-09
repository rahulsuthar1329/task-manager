import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg bg-black/30"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Enter" && onClose()}
      aria-label="Close popup"
      role="button"
      tabIndex={0}
    >
      <div
        className="task-container w-full rounded-lg shadow text-gray-300 md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

// <button
//   onClick={onClose}
//   className="absolute top-2 text-gray-400 right-2 w-5 h-5 rounded-full flex justify-center items-center"
// >
//   <span>✖</span>
// </button>
export default Popup;
