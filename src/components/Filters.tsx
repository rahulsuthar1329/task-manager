import { useState } from "react";
import Button from "./Button";
import Filter from "./Filter";
import Popup from "./Popup";
import CreateTask from "./CreateTask";

const Filters = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <div className="w-full px-5 h-[60px] flex items-center justify-between">
      <Button
        title="+ Create "
        onClick={() => setIsPopupOpen(true)}
        size="sm"
      />
      <Filter date="25.12.2023" />
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <CreateTask closePopup={() => setIsPopupOpen(false)} />
      </Popup>
    </div>
  );
};

export default Filters;
