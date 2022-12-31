import "./App.css";
import SheepWindow from "./components/SheepWindow/SheepWindow";
import KeyPad from "./components/KeyPad/KeyPad";
import { useAppSelector } from "./app/hooks";
// import { useSelector } from "react-redux";
import { RootState } from "./app/store";

function App(): JSX.Element {
  let error = useAppSelector((state: RootState) => state.counter.error);
  return (
    <div className="App">
      {error && <div className="error">{error}</div>}
      <SheepWindow />
      <KeyPad />
    </div>
  );
}

export default App;
