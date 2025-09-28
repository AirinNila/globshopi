"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const paymentMethods = [
  { name: "Cash on Delivery", value: "cod" },
  { name: "Online Payment", value: "online" },
  { name: "POS on Delivery", value: "pos" },
];

const paymentLogos = [
  {
    src: "/images/checkout/bkash.png",
    alt: "bKash",
  },
  {
    src: "/images/checkout/nagad.png",
    alt: "Nagad",
  },
  {
    src: "/images/checkout/rocket.png",
    alt: "Rocket",
  },
  {
    src: "/images/checkout/upay.png",
    alt: "uPay",
  },
  { src: "/images/checkout/takapay.png", alt: "takaPay" },
];

export default function CheckoutPayment() {
  const [selectedMethod, setSelectedMethod] = useState("cod");

  return (
    <div className="w-full flex flex-col gap-6 p-1">
      <h2 className="text-blue-600 text-xl md:text-2xl font-semibold">
        Select a payment method
      </h2>

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-start ">
        {paymentMethods.map((method) => (
          <div key={method.value} className="flex items-center">
            <input
              type="radio"
              id={method.value}
              name="paymentMethod"
              value={method.value}
              checked={selectedMethod === method.value}
              onChange={() => setSelectedMethod(method.value)}
              className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out mask-radial-to-blue-600 accent-blue-500"
            />
            <label htmlFor={method.value} className="ml-2 text-sm">
              {method.name}
            </label>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center md:space-x-4 max-md:gap-2">
        <p className="">We Accept:</p>
        {paymentLogos.map((logo) => (
          <Link
            href={""}
            className="h-13 w-18 border border-gray-200 rounded relative"
            key={logo.alt}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-cover rounded-lg"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
