import React from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import sheepulaFull from "../../Assets/sheepula-full.png";
import "./SheepWindow.css";
import "./sheepAnimation.css";

const SheepWindow: React.FC = () => {
  let points = useAppSelector((state: RootState) => state.counter.points);
  let randNum = useAppSelector((state: RootState) => state.counter.randNum);
  return (
    <div className="sheep-window">
      <div className="points-display">Points : {points}</div>
      {Array.from({ length: randNum }, (_, i) => (
        <img key={i} src={sheepulaFull} alt="🐑" className={`img${i}`} />
      ))}
    </div>
  );
};

export default SheepWindow;
