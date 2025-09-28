"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CheckoutCounter() {
  const [count, setCount] = useState(2);

  return (
    <div className="border border-gray-200 rounded-full py-2 px-3 flex gap-2">
      <button
        className="p-2 bg-blue-500 text-white rounded-full"
        disabled={count == 1 && true}
      >
        <FaMinus
          className="size-[.6rem]"
          onClick={() => setCount((prev) => --prev)}
        />
      </button>
      <span className="">{count}</span>
      <button className="p-2 bg-blue-500 text-white rounded-full">
        <FaPlus
          className="size-[.6rem]"
          onClick={() => setCount((prev) => ++prev)}
        />
      </button>
    </div>
  );
}
