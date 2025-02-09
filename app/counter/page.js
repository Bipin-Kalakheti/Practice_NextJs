"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button
        className="btn btn-primary m-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button className="btn btn-accent m-2" onClick={() => setCount(0)}>
        Reset
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
