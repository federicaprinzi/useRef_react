import { useState, useEffect, useRef } from "react";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const previousCount = useRef(initialValue);
  const newCount = useRef("");

  useEffect(() => {
    let newDirection =
      count > previousCount.current
        ? "up"
        : count < previousCount.current
        ? "down"
        : " ";

    if (newDirection !== newCount.current) {
      newCount.current = newDirection;
      console.log(newCount.current);
    }

    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
};

export default Counter;
