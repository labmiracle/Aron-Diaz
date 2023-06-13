import { useState } from "react";

import "./App.css";
import Title from "./components/Title";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return {
    counter,
    increase,
    decrement,
  };
};

function App() {
  const { counter, increase, decrement } = useCounter();

  return (
    <div>
      <Title></Title>
      <div>{counter}</div>
      <div className="card">
        <button onClick={decrement}>-</button>

        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default App;
