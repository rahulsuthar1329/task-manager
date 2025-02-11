import { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
import { validateTaskDetails } from "../utils/validate";
import { useAppDispatch } from "../store/hooks";
import { updateTask } from "../store/features/taskSlice";

interface UpdateTaskType {
  id: string;
  title: string;
  description: string;
  remainingDays: string;
  priority: string;
  category: string;
  status: string;
  closePopup: () => void;
}

const UpdateTask: React.FC<UpdateTaskType> = ({
  id,
  title,
  description,
  remainingDays,
  priority,
  category,
  status,
  closePopup,
}) => {
  const dispatch = useAppDispatch();

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedStoryPoints, setUpdatedStoryPoints] = useState(remainingDays);
  const [updatedPriority, setUpdatedPriority] = useState(priority);
  const [updatedCategory, setUpdatedCategory] = useState(category);

  const UpdateTask = () => {
    const errorMessage = validateTaskDetails(
      updatedTitle,
      updatedDescription,
      updatedStoryPoints,
      updatedPriority,
      updatedCategory
    );

    if (errorMessage) return errorMessage;

    dispatch(
      updateTask({
        id,
        title: updatedTitle,
        description: updatedDescription,
        remainingDays: parseInt(updatedStoryPoints),
        priority: updatedPriority,
        category: updatedCategory,
        status,
      })
    );

    closePopup();
  };

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white text-center">
        Create task
      </h1>
      <form className="space-y-4 md:space-y-6">
        <TextInput
          type="text"
          state={updatedTitle}
          setState={setUpdatedTitle}
          label="Task title"
          placeholder="Task title"
        />
        <TextInput
          type="text"
          state={updatedStoryPoints}
          setState={setUpdatedStoryPoints}
          label="Story points"
          placeholder="Story points"
        />
        <Dropdown
          label="Task Category"
          defaultValue={category}
          options={["Epic", "Feature", "Spike", "Task", "Sub-task"]}
          setSelect={setUpdatedCategory}
        />
        <Dropdown
          label="Task Priority"
          defaultValue={priority}
          options={["Critical", "High", "Medium", "Low"]}
          setSelect={setUpdatedPriority}
        />
        <TextInput
          type="text"
          state={updatedDescription}
          setState={setUpdatedDescription}
          label="Task Description"
          placeholder="Description"
        />
        <Button title="Update Task" onClick={UpdateTask} />
      </form>
    </div>
  );
};

export default UpdateTask;
