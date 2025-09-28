"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ProductCard from "./ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProductsPageHome() {
  const products = [
    {
      product_name: "Logitech MX Anywhere 3 Mouse",
      id: "Logitech/013ulasdfjoawj",
      image_url: "/images/productsdetails/iphone_black.png",
      rating: 4.9,
      discount_percentage: "10%",
      old_price: "৳ 1,399",
      new_price: "৳ 1,199",
      stock: 13,
    },
    {
      product_name: "IMILAB C20 Security Camera",
      id: "IMILAB/013ulasdfjoawj",
      image_url: "/images/productsdetails/iphone_blue.png",
      rating: 4.9,
      discount_percentage: "10%",
      old_price: "৳ 1,399",
      new_price: "৳ 1,199",
      stock: 13,
    },
    {
      product_name: "Haylou X1 Neo TWS Earbuds",
      id: "Haylou/013ulasdfjoawj",
      image_url: "/images/productsdetails/iphone_pink.png",
      rating: 4.9,
      discount_percentage: "10%",
      old_price: "৳ 1,399",
      new_price: "৳ 1,199",
      stock: 13,
    },
  ];

  const categoriesArr = [
    { category: "Iphone" },
    { category: "Samsung" },
    { category: "Google" },
    { category: "Vivo" },
    { category: "Xiaomi" },
    { category: "HONOR" },
    { category: "OnePlus" },
    { category: "OPPO" },
    { category: "Realme" },
    { category: "Infinix" },
    { category: "TECNO" },
    { category: "Walton" },
    { category: "Iphones" },
  ];

  const [filter, setFilter] = useState("Iphone");

  const handleFilter = (category) => {
    setFilter(filter === category ? null : category);
  };

  const buttonClass = (category) =>
    `px-3 py-1 border border-gray-300 rounded-full text-[.9rem] font-medium transition-all duration-200 cursor-pointer 
    ${
      filter === category
        ? "bg-blue-600 text-white shadow-lg"
        : "bg-white text-gray-700 hover:bg-gray-100"
    }`;

  const categories = categoriesArr.map((item) => item.category);

  return (
    <section className="pt-10 md:pb-10">
      <div className="baseContainer flex flex-col gap-10">
        <nav className="flex max-md:flex-col justify-between items-center max-md:items-start max-md:gap-6 text-gray-500 text-sm">
          <ul className="flex space-x-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href="" className="">
                Shop {`(3,248 results)`}
              </Link>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-3">
            <span className="text-gray-500 font-medium text-sm md:text-lg">
              Sort By:
            </span>
            <button className="px-4 py-2 text-sm rounded-full border border-gray-200 text-gray-500 flex justify-center items-center gap-1 capitalize">
              most Popular <IoIosArrowDown />
            </button>
          </div>
        </nav>

        {/* filter */}
        <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={buttonClass(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl md:text-3xl font-medium">
              Mobile Phone Price in Bangladesh
            </h2>
            <p className="text-sm font-light">
              Fresh picks — just landed in our store.
            </p>
          </div>
          <button className="px-4 py-2 text-sm rounded-full border border-gray-200 text-gray-500 flex justify-center items-center gap-1 capitalize">
            Default <IoIosArrowDown />
          </button>
        </div>

        {/* Main cards */}
        <div className="flex max-md:flex-col justify-center items-start gap-4 w-full">
          <div className="md:w-1/4 flex flex-col justify-start items-start gap-4 border bg-white border-gray-200 p-3 rounded-lg w-full">
            <div className="flex flex-col w-full  border bg-white border-gray-200 rounded-lg px-2">
              <button className="text-sm md:text-lg text-gray-600 flex justify-between items-center gap-1 capitalize w-full cursor-pointer border-b border-gray-200  px-2 py-3">
                Price <IoIosArrowDown className="rotate-180" />
              </button>
              <div className="flex flex-col gap-4 py-3">
                <div className="text-center">৳0 - ৳100000</div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={40}
                  className="range text-blue-400"
                />
                <div className="flex justify-between items-center">
                  <span className="py-0.5 px-2 border border-gray-200 rounded-lg">
                    ৳0
                  </span>
                  <span className="py-0.5 px-2 border border-gray-200 rounded-lg">
                    ৳100000
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full  border bg-white border-gray-200 rounded-lg px-2">
              <button className="text-sm md:text-lg text-gray-600 flex justify-between items-center gap-1 capitalize w-full cursor-pointer border-b border-gray-200  px-2 py-3">
                Availability <IoIosArrowDown />
              </button>
            </div>
            <div className="flex flex-col w-full  border bg-white border-gray-200 rounded-lg px-2">
              <button className="text-sm md:text-lg text-gray-600 flex justify-between items-center gap-1 capitalize w-full cursor-pointer border-b border-gray-200  px-2 py-3">
                Rating <IoIosArrowDown />
              </button>
            </div>
            <div className="flex flex-col w-full  border bg-white border-gray-200 rounded-lg px-2">
              <button className="text-sm md:text-lg text-gray-600 flex justify-between items-center gap-1 capitalize w-full cursor-pointer border-b border-gray-200  px-2 py-3">
                Brand <IoIosArrowDown />
              </button>
            </div>
            <div className="flex flex-col w-full  border bg-white border-gray-200 rounded-lg px-2">
              <button className="text-sm md:text-lg text-gray-600 flex justify-between items-center gap-1 capitalize w-full cursor-pointer border-b border-gray-200  px-2 py-3">
                Display Size <IoIosArrowDown />
              </button>
            </div>
          </div>
          <div className="md:w-3/4 w-full">
            <div className=" gap-4 grid sm:grid-cols-2 md:grid-cols-3 w-full">
              {products.map((e, i) => (
                <>
                  <ProductCard
                    key={`${e.id}:${i}`}
                    cardFirstName={e.product_name}
                    discount={e.discount_percentage}
                    imgSrc={e.image_url}
                    newPrice={e.new_price}
                    oldPrice={e.old_price}
                    href={`products/${Math.floor(Math.random() * 1000)}`}
                  />
                </>
              ))}
              {products.map((e, i) => (
                <>
                  <ProductCard
                    key={`secondCardOnProduct${e.id}${i}`}
                    cardFirstName={e.product_name}
                    discount={e.discount_percentage}
                    imgSrc={e.image_url}
                    newPrice={e.new_price}
                    oldPrice={e.old_price}
                    href={`products/${Math.floor(Math.random() * 1000)}`}
                  />
                </>
              ))}
              {products.map((e, i) => (
                <>
                  <ProductCard
                    key={`thirdCardOnProduct${e.id}/${i}`}
                    cardFirstName={e.product_name}
                    discount={`${e.discount_percentage}`}
                    imgSrc={e.image_url}
                    newPrice={e.new_price}
                    oldPrice={e.old_price}
                    href={`products/${Math.floor(Math.random() * 1000)}`}
                  />
                </>
              ))}
            </div>
            <div className="w-full flex justify-between items-center max-md:flex-col max-md:pt-5">
              <div className="w-fit">Showing 1 to 20 of 299 (15 Pages)</div>
              <div className="flex justify-center items-center gap-5 max-sm:flex-col md:w-1/2 py-5">
                <div className="">
                  {" "}
                  <Link
                    href={"/checkout"}
                    className="flex justify-center items-center gap-1 cursor-pointer text-sm px-2 py-2 rounded-full border border-blue-400 text-blue-500 font-semibold transition-colors duration-200 max-md:w-full"
                  >
                    <FaArrowRightLong className="rotate-180" />
                    Previous
                  </Link>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <div className="p-2 rounded-full size-8 text-center cursor-pointer flex justify-center items-center bg-blue-500 text-white">
                    1
                  </div>
                  <div className="p-2 rounded-full size-8 text-center cursor-pointer flex justify-center items-center">
                    2
                  </div>
                  <div className="p-2 rounded-full size-8 text-center cursor-pointer flex justify-center items-center">
                    3
                  </div>
                  <div className="p-2 rounded-full size-8 text-center cursor-pointer flex justify-center items-center">
                    ...
                  </div>
                  <div className="p-2 rounded-full size-8 text-center cursor-pointer flex justify-center items-center">
                    8
                  </div>
                  <div className="p-2 rounded-full size-8 text-center cursor-pointer flex justify-center items-center">
                    9
                  </div>
                  <div className="p-2 rounded-full size-8 text-center cursor-pointer flex justify-center items-center">
                    10
                  </div>
                </div>
                <div className="">
                  {" "}
                  <Link
                    href={"/checkout"}
                    className="flex justify-center items-center gap-1 cursor-pointer text-sm px-2 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200 max-md:w-full"
                  >
                    Next
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
