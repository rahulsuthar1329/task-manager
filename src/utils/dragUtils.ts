import { Dispatch, SetStateAction } from "react";

type DragStartProps = (
  setActiveCard: Dispatch<SetStateAction<string | null>>,
  id: string
) => void;

type DragEndProps = (
  setActiveCard: Dispatch<SetStateAction<string | null>>
) => void;

export const onDragStart: DragStartProps = (setActiveCard, id) => {
  setActiveCard(id);
};

export const onDragEnd: DragEndProps = (setActiveCard) => setActiveCard(null);
