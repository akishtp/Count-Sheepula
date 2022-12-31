import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import sheepulaFull from "../../Assets/sheepula-full.png";
import "./SheepWindow.css";

const SheepWindow: React.FC = () => {
  let points = useAppSelector((state: RootState) => state.counter.points);
  const [randNum, setRandNum] = useState(
    Math.floor(Math.random() * (points + 5))
  );
  return (
    <div className="sheep-window">
      <div className="points-display">Points : {points}</div>
      <img src={sheepulaFull} alt="🐑" />
    </div>
  );
};

export default SheepWindow;
