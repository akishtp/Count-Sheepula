import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="top-side"></div>
      <div className="bottom-side">
        <input type="number" />
        <div className="button-row">
          <button>
            <span>1</span>
          </button>
          <button>
            <span>2</span>
            <p>ABC</p>
          </button>
          <button>
            <span>3</span>
            <p>DEF</p>
          </button>
        </div>
        <div className="button-row">
          <button>
            <span>4</span>
            <p>GHI</p>
          </button>
          <button>
            <span>5</span>
            <p>JKL</p>
          </button>
          <button>
            <span>6</span>
            <p>MNO</p>
          </button>
        </div>
        <div className="button-row">
          <button>
            <span>7</span>
            <p>PQRS</p>
          </button>
          <button>
            <span>8</span>
            <p>TUV</p>
          </button>
          <button>
            <span>9</span>
            <p>WXYZ</p>
          </button>
        </div>
        <div className="button-row">
          <button>
            <span>🔙</span>
          </button>
          <button>
            <span>0</span>
          </button>
          <button>
            <span>✔️</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
