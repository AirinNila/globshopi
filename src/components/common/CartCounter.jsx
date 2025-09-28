"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CartCounter() {
  const [count, setCount] = useState(2);

  return (
    <div className="border border-gray-200 w-fit rounded-full py-1.5 px-2 flex gap-2">
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
