"use client";
import { useState } from "react";
import Counter from "./components/Counter";
import TotalValue from "./components/TotalValue";

const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

export default function Home() {
  const [counters, setCounters] = useState(initialCounters);

  const totalValue = counters.reduce(
    (initial, current) => initial + current.value,
    0
  );

  const handleIncrement = (counterId) => {
    const updatedCounter = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounter);
  };

  const handleDecrement = (counterId) => {
    const updatedCounter = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounter);
  };

  return (
    <div className="max-w-md mx-auto flex justify-center items-center min-h-screen">
      <div className="bg-gray-50 p-10 text-black rounded-2xl text-center">
        <TotalValue totalValue={totalValue} />
        <div className="space-y-12">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              count={counter.value}
              onIncrement={() => handleIncrement(counter.id)}
              onDecrement={() => handleDecrement(counter.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
