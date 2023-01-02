import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { removeKey, submitValue } from "../../features/sheepCounterSlice";
import Key from "./Key";
import "./KeyPad.css";

const KeyPad = () => {
  const dispatch = useDispatch();
  let sheepValue = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="key-pad">
      <div className="input">{sheepValue}</div>
      <div className="keys">
        <div className="key-row">
          <Key value="1" />
          <Key value="2" />
          <Key value="3" />
        </div>
        <div className="key-row">
          <Key value="4" />
          <Key value="5" />
          <Key value="6" />
        </div>
        <div className="key-row">
          <Key value="7" />
          <Key value="8" />
          <Key value="9" />
        </div>
        <div className="key-row">
          <button className="key" onClick={() => dispatch(removeKey())}>
            🔙
          </button>
          <Key value="0" />
          <button className="key" onClick={() => dispatch(submitValue())}>
            ✅
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyPad;
