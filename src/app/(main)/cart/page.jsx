import CartCounter from "@/components/common/CartCounter";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function CartPage() {
  return (
    <div className="py-10">
      <div className="baseContainer overflow-hidden">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-2xl md:text-[2.2rem]">
            Your Cart (4 Items)
          </h1>

          {/* desktop */}
          <div className="hidden sm:block overflow-x-auto rounded-2xl">
            <table className="w-full text-center border-separate border-spacing-y-3">
              {/* Table Head */}
              <thead className="">
                <tr className="text-gray-800 text-lg border-b border-gray-900">
                  <th className="relative py-3 font-medium md:w-[420px] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[24px] before:bg-gray-300">
                    Items
                  </th>
                  <th className="relative py-3 font-medium before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[24px] before:bg-gray-300">
                    Price
                  </th>
                  <th className="relative py-3 font-medium before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[24px] before:bg-gray-300">
                    Quantity
                  </th>
                  <th className="relative py-3 font-medium before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[24px] before:bg-gray-300">
                    Total
                  </th>
                  <th className="py-3 font-medium">Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                <CartRow />
                <CartRow />
                <CartRow />
                <CartRow />
              </tbody>
            </table>
          </div>

          {/* mobile */}
          <div className="sm:hidden flex flex-col gap-3">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>

          <div className="border-gray-200 border rounded-3xl py-4 px-5">
            {[
              { "Product Name": "iPhone 16e" },
              { Color: "White" },
              { Price: `118,000৳` },
              { Delivery: "60৳" },
              { "Sub-Total": "118,000৳" },
              { Total: "118,060৳" },
            ].map((e) => {
              const key = Object.keys(e)[0];
              const value = e[key];

              return (
                <div
                  key={key} // Use the unique key (e.g., "Full Name", "District")
                  className={`grid grid-cols-2 py-2 border-b border-gray-200 text-sm md:text-[1.1rem] md:gap-70`}
                >
                  <h5 className="font-medium">{key}</h5>
                  <span className="w-fit">{value}</span>
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="px-4 rounded-2xl gap-3 md:gap-10 flex justify-center items-center max-md:flex-col w-full">
            <Link
              href={"/products"}
              className="transition-all duration-300 py-2 md:my-6 w-full text-blue-500 flex justify-center items-center gap-2 rounded-full border-blue-500 border cursor-pointer hover:bg-blue-500 hover:text-white max-md:text-sm"
            >
              Continue Shopping <FaArrowRightLong />
            </Link>
            <Link
              href={"/cart"}
              className="transition-all duration-300 py-2 md:my-6 w-full bg-blue-500 flex justify-center items-center gap-2 rounded-full text-white max-md:text-sm hover:bg-blue-600"
            >
              <HiOutlineShoppingCart className="text-gray-50" /> Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const CartRow = () => {
  return (
    <tr className=" transition rounded-2xl bg-gray-50">
      {/* Item Cell */}
      <td className="relative p-4 flex items-center gap-4 align-middle before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[24px] before:bg-gray-300">
        <Image
          src={"/images/productsdetails/iphone_blue.png"}
          alt=""
          width={80}
          height={80}
          className="rounded"
        />
        <div className="flex flex-col items-start gap-1">
          <h5 className="text-2xl font-semibold">iPhone 16e</h5>
          <p className="max-lg:text-xs font-light">
            Fresh picks — just landed in our store.
          </p>
          <div className="flex max-lg:text-xs gap-2 md:gap-3">
            <p className="text-md">Color:</p>
            <button className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
              White
            </button>
          </div>
        </div>
      </td>

      {/* Price */}
      <td className="relative p-4 font-medium align-middle before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[24px] before:bg-gray-300">
        ৳8,000
      </td>

      {/* Quantity */}
      <td className="relative p-4 align-middle before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[24px] before:bg-gray-300">
        <div className="flex justify-center items-center">
          <CartCounter />
        </div>
      </td>

      {/* Total */}
      <td className="relative p-4 font-medium align-middle before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[24px] before:bg-gray-300">
        ৳8,000
      </td>

      {/* Action */}
      <td className="p-4 align-middle">
        <div className="inline-block">
          <Link
            href={""}
            className="px-2 py-2 flex justify-center items-center border bg-red-50 font-semibold border-red-200 gap-1 rounded-full text-xs w-fit"
          >
            <RiDeleteBinLine className="size-5 text-red-500" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

const CartCard = () => (
  <div className="bg-gray-50 p-4 rounded-2xl shadow flex flex-col gap-2">
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <Image
          src={"/images/productsdetails/iphone_blue.png"}
          alt=""
          width={60}
          height={60}
          className="rounded"
        />
        <div className="flex flex-col gap-1">
          <h5 className="text-lg font-semibold">iPhone 16e</h5>
          <p className="text-xs font-light">
            Fresh picks — just landed in our store.
          </p>
        </div>
      </div>
      <Link
        href={""}
        className="px-2 py-2 flex justify-center items-center border bg-red-50 font-semibold border-red-200 gap-1 rounded-full text-xs"
      >
        <RiDeleteBinLine className="text-red-500" />
      </Link>
    </div>
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">৳8,000</span>
      <CartCounter />
      <span className="font-medium">৳8,000</span>
    </div>
  </div>
);
