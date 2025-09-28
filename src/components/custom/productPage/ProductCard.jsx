"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function ProductCard({
  href = "/products/9782Iphone23",
  discount = "10%",
  imgSrc = "/images/productsdetails/iphone_blue.png",
  cardFirstName = "IMILAB C20 Security Camera",
  // cardSecondName = "",
  oldPrice = "৳ 1,399",
  newPrice = "৳ 1,199",
  rating = "4.9",
  stock = "13",
  cartLink = "/checkout",
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex items-center justify-center">
      {/* Product Card Container */}
      <div className="relative w-full bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow transition-shadow duration-300">
        {/* Discount and Favorite Badges */}
        <div className="absolute top-0 left-0 p-3 z-10 flex w-full justify-between items-center">
          {/* Discount Badge */}
          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 shadow-md">
            {discount}
          </span>
          {/* Favorite Button (Heart Icon) */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Product Image */}
        <Link href={href}>
          <div className="relative w-full h-[16rem]">
            <Image
              src={imgSrc}
              alt="Iphone image"
              fill
              className="object-contain rounded p-5 border shadow-xs border-gray-200"
            />
          </div>
        </Link>

        {/* Product Details Section */}
        <div className="p-5">
          {/* Product Name */}
          <div className="flex justify-between items-start">
            <div className="">
              <Link
                href={href}
                className="text-md font-semibold text-gray-800 w-4/5"
              >
                {cardFirstName}
              </Link>
            </div>

            {/* Rating */}
            <div className="flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400 fill-current mr-1"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-600 font-medium">{rating}</span>
            </div>
          </div>

          {/* Prices and Stock */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <div className="flex flex-col gap-1">
                <div className="space-x-2">
                  <span className="text-sm text-gray-400 line-through">
                    {oldPrice}
                  </span>
                  <span className="bg-blue-100 text-blue-500 text-xs font-semibold p-0.5 shadow-md">
                    {discount}
                  </span>
                </div>
                <div className="space-x-2">
                  <span className="text-lg font-bold text-gray-900">
                    {newPrice}
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 ">
                    Stock-{stock}
                  </span>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Link
              href={cartLink}
              className="p-3 bg-gray-300 rounded-full text-gray-600 hover:bg-gray-300 transition-colors duration-200 shadow-md cursor-pointer"
            >
              <HiOutlineShoppingCart className="text-gray-50" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
