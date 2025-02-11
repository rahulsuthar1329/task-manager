import { useState } from "react";
import Button from "./Button";
import Link from "./Link";
import TextInput from "./TextInput";
import Dropdown from "./Dropdown";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [storyPoints, setStoryPoints] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");

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
          type="number"
          state={storyPoints}
          setState={setStoryPoints}
          label="Story points"
          placeholder="Story points"
        />
        <Dropdown defaultValue="Please select" options={["bug", "story"]} />
        <TextInput
          type="text"
          state={title}
          setState={setTitle}
          label="Priority of task"
          placeholder="Priority"
        />
        <TextInput
          type="text"
          state={title}
          setState={setTitle}
          label="Priority of task"
          placeholder="Priority"
        />
        <Button title="Create Task" />
      </form>
    </div>
  );
};

export default CreateTask;
