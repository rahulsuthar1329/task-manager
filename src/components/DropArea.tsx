import { useState } from "react";

interface DropAreaProps {
  onDrop: () => void;
}

const DropArea: React.FC<DropAreaProps> = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <article
      className={` text-center border border-dashed bg-gray-700 border-gray-600 rounded-lg text-sm ${
        showDrop ? "show-area" : "hide-area"
      }`}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(event) => event.preventDefault()}
    >
      Drag Here
    </article>
  );
};

export default DropArea;
