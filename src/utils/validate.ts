type validateTaskType = (
  title: string,
  description: string,
  storypoint: string,
  priority: string,
  category: string
) => string;

export const validateTaskDetails: validateTaskType = (
  title,
  description,
  storypoint,
  priority,
  category
) => {
  if (!title) return "Please enter the title.";
  if (!description) return "Please enter the description.";
  if (!storypoint) return "Please enter the story points.";
  if (!Number.isInteger(parseInt(storypoint)))
    return "Story point should be an integer.";
  if (!priority) return "Please select the priority";
  if (!category) return "Please select the category";
  return "";
};
