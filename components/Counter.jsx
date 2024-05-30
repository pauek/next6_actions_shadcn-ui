"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      // program a state update for ***later***
      setCount((prev) => prev + 1); 
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  return (
    <div className="border-2 rounded p-2 w-fit flex flex-col items-center mb-2">
      <div className="text-2xl">{count}</div>
      <div>
        <button
          onClick={decrement}
          className={`mr-1 ${
            count <= 0 ? "text-gray-300" : ""
          }`}
          disabled={count <= 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17 13H7v-2h10m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
            />
          </svg>
        </button>
        <button
          onClick={increment}
          className={`mr-1 ${
            count >= 10 ? "text-gray-300" : ""
          }`}
          disabled={count >= 10}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
