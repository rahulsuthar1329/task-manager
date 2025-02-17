import { useState } from "react";
import Button from "./Button";
import Popup from "./Popup";
import CreateTask from "./CreateTask";
import { useAppDispatch } from "../store/hooks";
import { setLogout } from "../store/features/authSlice";

const Filters = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full px-5 h-[60px] flex items-center justify-between">
      <Button
        title="+ Create "
        onClick={() => setIsPopupOpen(true)}
        size="sm"
      />
      <Button title="Logout" size="sm" onClick={() => dispatch(setLogout())} />
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <CreateTask closePopup={() => setIsPopupOpen(false)} />
      </Popup>
    </div>
  );
};

export default Filters;
