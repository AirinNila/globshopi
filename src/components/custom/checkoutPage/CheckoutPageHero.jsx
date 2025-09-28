import Image from "next/image";
import Link from "next/link";
import CheckoutCounter from "./CheckoutCounter";

export default function CheckoutPageHero() {
  return (
    <section className="pt-10">
      <div className="baseContainer">
        <nav className="text-gray-500 text-sm mb-8 md:mb-16">
          <ul className="flex space-x-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href="/products" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href="#" className="hover:underline">
                iPhone
              </Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href="#" className="hover:underline">
                Shoping Cart
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:flex px-3 md:px-20 md:gap-25 pb-10 border-b border-b-gray-200">
          <div className="relative w-55 h-43 mx-auto">
            <Image
              src="/images/productsdetails/iphone_blue.png"
              alt="checkout hero"
              fill
              className="object-contain rounded-2xl border border-gray-200"
            />
          </div>
          <div className="flex max-md:flex-col justify-between w-full items-center">
            <div className="flex flex-col gap-3 max-md:my-3 md:gap-6 justify-start items-start">
              <div className="flex flex-col md:gap-3">
                <h3 className="text-2xl md:text-3xl font-medium">iPhone 16e</h3>
                <p className="text-[1rem] font-[400]">
                  Fresh picks — just landed in our store.
                </p>
              </div>
              <span className="flex gap-3 justify-center items-center">
                <p className="md:text-lg text-md">Color:</p>
                <button className="bg-blue-500 text-white py-1 px-2 text-sm rounded-full">
                  White
                </button>
              </span>
            </div>
            <div className="grid max-md:grid-cols-2 place-items-center gap-3">
              <div className="text-3xl font-medium">৳ 1,1999</div>
              <CheckoutCounter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
