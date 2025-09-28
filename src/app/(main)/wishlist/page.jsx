import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function WishlistPage() {
  return (
    <div className="py-10">
      <div className="baseContainer overflow-hidden">
        <div className="flex flex-col gap-3">
          <h1 className={`font-semibold text-2xl md:text-[2.2rem]`}>
            Your Wishlist (4 Items)
          </h1>
          <div
            className={`p-4 rounded-2xl gap-3 grid sm:grid-cols-2 lg:grid-cols-1 w-full`}
          >
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
          </div>
          <div
            className={`px-4 rounded-2xl gap-3 md:gap-10 flex justify-center items-center max-md:flex-col w-full`}
          >
            <Link
              href={"/products"}
              className="transition-all duration-300 py-2 md:my-6 w-full text-blue-500 flex justify-center items-center gap-2  rounded-full border-blue-500 border cursor-pointer hover:bg-blue-500 hover:text-white  max-md:text-sm"
            >
              Continue Shopping <FaArrowRightLong />
            </Link>
            <Link
              href={"/cart"}
              className="transition-all duration-300 py-2 md:my-6 w-full bg-blue-500 flex justify-center items-center gap-2  rounded-full text-white max-md:text-sm hover:bg-blue-600 "
            >
              <HiOutlineShoppingCart className="text-gray-50" /> Go to Cart
            </Link>
          </div>
          {/* {SecondMainContent} */}
        </div>
      </div>
    </div>
  );
}

const WishlistCard = () => {
  return (
    <div className="flex bg-gray-50 max-lg:flex-col justify-between items-center rounded-2xl border border-gray-100 p-2 w-full">
      <div className="flex justify-center items-center gap-6 max-lg:justify-start max-lg:w-full">
        <Image
          src={"/images/productsdetails/iphone_blue.png"}
          alt=""
          width={80}
          height={80}
          className=""
        />
        <div className="flex flex-col justify-center items-start gap-1 ">
          <h5 className="text-2xl font-semibold">iPhone 16e</h5>
          <p className="max-lg:text-xs font-light md:pr-10 lg:pr-15 lg:border-r md:border-gray-300">
            Fresh picks — just landed in our store.
          </p>
          <div className="flex max-lg:text-xs justify-start gap-2 md:gap-3">
            <p className="text-md ">Color:</p>
            <button className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
              White
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center gap-4 md:pr-10 lg:pr-15 lg:border-r md:border-gray-300">
        <span className="text-md font-medium">৳8,000</span>
      </div>

      <div className="hidden lg:flex justify-center items-center gap-4 md:pr-10 lg:pr-15 lg:border-r md:border-gray-300">
        <span className="bg-green-100/70 py-1 px-2 rounded-full w-fit text-sm text-green-500 ">
          In Stock
        </span>
      </div>

      <div className="flex justify-center items-center gap-2 md:gap-4 max-lg:justify-between max-lg:w-full">
        <div className="hidden max-lg:flex flex-col justify-start items-center gap-1 py-1">
          <span className="bg-green-100/70 py-1 px-2 rounded-full w-fit text-sm text-green-500 ">
            In Stock
          </span>
          <span className="text-md font-medium">৳8,000</span>
        </div>
        <Link
          href={""}
          className="px-3 py-1.5 flex justify-center items-center border text-white font-semibold border-blue-200 bg-blue-500 gap-1 rounded-full text-sm"
        >
          <HiOutlineShoppingCart className="text-gray-50" /> Add to cart
        </Link>
        <Link
          href={""}
          className="px-2 py-2 flex justify-center items-center border bg-red-50 font-semibold border-red-200  gap-1 rounded-full text-xs"
        >
          <RiDeleteBinLine className="size-5 text-red-500" />
        </Link>
      </div>
    </div>
  );
};
