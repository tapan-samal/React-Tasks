import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // const handlePlus = () => {
  //   setCount(count + 1);
  // };
  // const handleMinus = () => {
  //   setCount(count - 1);
  // };

  return (
    <>
      <h2>Build a Counter App</h2>
      <button onClick={() => setCount(count + 1)} disabled={count === 20}>+</button> &nbsp;
      <h2>{count}</h2>
      <button onClick={() => setCount(count -1)} disabled={count === 0}>-</button>
    </>
  );
};

export default Counter;
