import React from "react";
import { useAppDispatch } from "../app/hooks";
import { addKeyPress } from "../features/sheepCounterSlice";

interface KeyProps {
  value: string;
}
const Key: React.FC<KeyProps> = ({ value }) => {
  const dispatch = useAppDispatch();
  const handleKeyClick = () => {
    dispatch(addKeyPress(value));
  };
  return (
    <button className="key" onClick={() => handleKeyClick()}>
      {value}
    </button>
  );
};

export default Key;
