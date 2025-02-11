import { Dispatch, SetStateAction, useState } from "react";
import { BadgeType } from "../types";
import { onDragStart } from "../utils/dragUtils";
import Avatar from "./Avatar";
import Badge from "./Badge";
import { deleteTask } from "../store/features/taskSlice";
import { useAppDispatch } from "../store/hooks";
import CancelIcon from "../icons/CancelIcon";
import Popup from "./Popup";
import UpdateTask from "./UpdateTask";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  remainingDays: string;
  priority: string;
  category: string;
  status: string;
  setActiveCard?: Dispatch<SetStateAction<string | null>>;
  // onClick: () => void;
}

const Task: React.FC<TaskProps> = ({
  id,
  title,
  description,
  remainingDays,
  priority,
  category,
  status,
  setActiveCard,
  // onClick,
}) => {
  const dispatch = useAppDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <article
      className="bg-[#ffffff18] rounded-lg px-4 py-4 cursor-pointer hover:bg-[#ffffff25] active:cursor-grab active:opacity-75 active:outline-2 active:outline-gray-300"
      draggable={setActiveCard ? "true" : "false"}
      onDragStart={() => setActiveCard && onDragStart(setActiveCard, id)}
      onDragEnd={() => setActiveCard && setActiveCard(null)}
      onClick={() => setIsPopupOpen(true)}
    >
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <Badge label={category} type={BadgeType.MESSAGE} />
          <Badge label={priority} type={BadgeType.WARNING} />
        </div>
        <CancelIcon size={18} onClick={() => dispatch(deleteTask(id))} />
      </div>
      <h5 className="mt-2 text-white">{title}</h5>
      <p className="text-[12px] text-gray-500">{description}</p>
      <div className="mt-2 flex justify-between items-center">
        <Badge
          label={
            status === "completed" ? "Fixed" : `${remainingDays} days left`
          }
          type={
            parseInt(remainingDays) > 3 || remainingDays === "0"
              ? BadgeType.SUCCESS
              : BadgeType.DANGER
          }
        />
        <div className="flex items-center space-x-2">
          <span className="text-[12px] text-gray-500 underline font-semibold hover:text-gray-400">
            ID: {id}{" "}
          </span>
          <Avatar />
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <UpdateTask
          id={id.toString()}
          title={title}
          priority={priority}
          category={category}
          remainingDays={remainingDays.toString()}
          description={description}
          status={status}
          closePopup={() => setIsPopupOpen(false)}
        />
      </Popup>
    </article>
  );
};

export default Task;
