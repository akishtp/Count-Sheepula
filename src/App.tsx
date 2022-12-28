import "./App.css";
import SheepWindow from "./components/SheepWindow/SheepWindow";
import KeyPad from "./components/KeyPad/KeyPad";

function App(): JSX.Element {
  return (
    <div className="App">
      <SheepWindow />
      <KeyPad />
    </div>
  );
}

export default App;
