"use client";

import { useState } from "react";

export default function CheckoutCheckbox() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className="mb-4 flex justify-center items-center ">
      <input
        id="default-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 -600 -800 focus:ring-2   accent-blue-500"
      />
      <label
        htmlFor="default-checkbox"
        className="ms-2 text-sm font-medium text-gray-900 "
      >
        I agree to Terms & Privacy
      </label>
    </div>
  );
}
