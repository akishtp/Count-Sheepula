import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import sheepulaFull from "../../Assets/sheepula-full.png";
import "./SheepWindow.css";
import "./sheepAnimation.css";

const SheepWindow: React.FC = () => {
  const [array, setArray] = useState<any>([]);
  let points = useAppSelector((state: RootState) => state.counter.points);
  let randNum = useAppSelector((state: RootState) => state.counter.randNum);

  useEffect(() => {
    const interval = setInterval(() => {
      while (array.length < randNum)
        setArray((arr: string | any) => [...arr, arr.length + 1]);
    }, 1000);

    return () => clearInterval(interval);
  }, [array.length, randNum]);

  return (
    <div className="sheep-window">
      <div className="points-display">Points : {points}</div>
      {array.map((number: number) => (
        <img key={number} src={sheepulaFull} alt="🐑" />
      ))}
    </div>
  );
};

export default SheepWindow;
