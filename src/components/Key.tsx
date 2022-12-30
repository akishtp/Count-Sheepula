import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import { RootState } from "../app/store";
import { addKeyPress, resetSheepValue } from "../features/sheepCounterSlice";

interface KeyProps {
  value: string;
}
const Key: React.FC<KeyProps> = ({ value }) => {
  let sheepValue = useSelector((state: RootState) => state.counter.value);

  const dispatch = useAppDispatch();
  const handleKeyClick = () => {
    if (sheepValue.length < 9) {
      dispatch(addKeyPress(value));
    } else {
      resetSheepValue();
    }
  };
  return (
    <button className="key" onClick={() => handleKeyClick()}>
      {value}
    </button>
  );
};

export default Key;
