import { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
import { validateTaskDetails } from "../utils/validate";
import { useAppDispatch } from "../store/hooks";
import { addTask } from "../store/features/taskSlice";
import { generateRandomId } from "../utils/commonUtils";

interface CreateTaskType {
  closePopup: () => void;
}

const CreateTask: React.FC<CreateTaskType> = ({ closePopup }) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [storyPoints, setStoryPoints] = useState("");
  const [priority, setPriority] = useState("High");
  const [category, setCategory] = useState("");

  const createTask = () => {
    const errorMessage = validateTaskDetails(
      title,
      description,
      storyPoints,
      priority,
      category
    );

    if (errorMessage) return errorMessage;

    dispatch(
      addTask({
        id: generateRandomId(),
        title,
        description,
        remainingDays: parseInt(storyPoints),
        priority,
        category,
        status: "inprogress",
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
          state={title}
          setState={setTitle}
          label="Task title"
          placeholder="Task title"
        />
        <TextInput
          type="text"
          state={storyPoints}
          setState={setStoryPoints}
          label="Story points"
          placeholder="Story points"
        />
        <Dropdown
          label="Task Category"
          defaultValue="Please select"
          options={["Epic", "Feature", "Spike", "Task", "Sub-task"]}
          setSelect={setCategory}
        />
        <Dropdown
          label="Task Priority"
          defaultValue="Please select"
          options={["Critical", "High", "Medium", "Low"]}
          setSelect={setPriority}
        />
        <TextInput
          type="text"
          state={description}
          setState={setDescription}
          label="Task Description"
          placeholder="Description"
        />
        <Button title="Create Task" onClick={createTask} />
      </form>
    </div>
  );
};

export default CreateTask;
