import React, { useState } from "react";
import "./App.css";
import CounterDisplay from "./components/CounterDisplay";

function Counter({ initialValue, decrementValue }) {
  const [count, setCount] = useState(initialValue);

  const handleValue = () => {
    setCount(count - decrementValue);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <button className="buttons" onClick={handleValue}>
        DIMINUISCI
      </button>
      <button className="buttons" onClick={handleReset}>
        RESETTA
      </button>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Counter initialValue={10} decrementValue={1} />
    </div>
  );
};

export default App;
