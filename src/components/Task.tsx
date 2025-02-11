import { Dispatch, SetStateAction } from "react";
import { BadgeType } from "../types";
import { onDragStart } from "../utils/dragUtils";
import Avatar from "./Avatar";
import Badge from "./Badge";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  remainingDays: string;
  priority: string;
  category: string;
  status: string;
  setActiveCard: Dispatch<SetStateAction<string | null>>;
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
}) => {
  return (
    <article
      className="bg-[#ffffff18] rounded-lg px-4 py-4 cursor-pointer hover:bg-[#ffffff25] active:cursor-grab active:opacity-75 active:outline-2 active:outline-gray-300"
      draggable
      onDragStart={() => onDragStart(setActiveCard, id)}
      onDragEnd={() => setActiveCard(null)}
    >
      <div className="flex space-x-2 items-center">
        <Badge label={category} type={BadgeType.MESSAGE} />
        <Badge label={priority} type={BadgeType.WARNING} />
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
    </article>
  );
};

export default Task;
