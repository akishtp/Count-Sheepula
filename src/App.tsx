import "./App.css";
import SheepWindow from "./components/SheepWindow/SheepWindow";
import KeyPad from "./components/KeyPad/KeyPad";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { RootState } from "./app/store";
import { useEffect, useState } from "react";
import { noError } from "./features/sheepCounterSlice";

function App(): JSX.Element {
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  let error = useAppSelector((state: RootState) => state.counter.error);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (error) {
      setErrorVisible(true);
      setTimeout(() => {
        setErrorVisible(false);
        dispatch(noError());
      }, 2500);
    }
  }, [setErrorVisible, error, dispatch]);

  return (
    <div className="App">
      {errorVisible && <div className="error">{error}</div>}
      <SheepWindow />
      <KeyPad />
    </div>
  );
}

export default App;
