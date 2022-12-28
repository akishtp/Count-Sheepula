import Key from "../Key";
import "./KeyPad.css";

const KeyPad = () => {
  return (
    <div className="key-pad">
      <div className="input">123456789</div>
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
          <Key value="🔙" />
          <Key value="0" />
          <Key value="✔️" />
        </div>
      </div>
    </div>
  );
};

export default KeyPad;
