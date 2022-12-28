const KeyPad = () => {
  return (
    <div className="key-pad">
      <div className="input">123456789</div>
      <div className="keys">
        <div className="key-row">
          <button className="key">1</button>
          <button className="key">2</button>
          <button className="key">3</button>
        </div>
        <div className="key-row">
          <button className="key">4</button>
          <button className="key">5</button>
          <button className="key">6</button>
        </div>
        <div className="key-row">
          <button className="key">7</button>
          <button className="key">8</button>
          <button className="key">9</button>
        </div>
        <div className="key-row">
          <button className="key">🔙</button>
          <button className="key">0</button>
          <button className="key">✔️</button>
        </div>
      </div>
    </div>
  );
};

export default KeyPad;
