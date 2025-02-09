import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handleChange =
  (setState: Dispatch<SetStateAction<string>>) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

export { handleChange };
