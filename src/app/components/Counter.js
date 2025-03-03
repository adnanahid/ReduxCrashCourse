"use client";
import { useState } from "react";
import Count from "./Count";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <Count count={count}></Count>
      <div className="space-x-3 flex">
        <Button handler={handleIncrement}>Increment</Button>
        <Button handler={handleDecrement}>Decrement</Button>
      </div>
    </div>
  );
}
