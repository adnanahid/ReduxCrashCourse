"use client";
import { useState } from "react";
import Count from "./Count";
import Button from "./Button";

export default function Counter({count, onIncrement, onDecrement}) {
  return (
    <div>
      <Count count={count}></Count>
      <div className="space-x-3 flex">
        <Button handler={onIncrement}>Increment</Button>
        <Button handler={onDecrement}>Decrement</Button>
      </div>
    </div>
  );
}
