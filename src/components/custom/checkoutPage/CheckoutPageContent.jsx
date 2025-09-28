import CommonContentSection from "@/components/common/CommonContentSection";
import { IoLocationOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutReview from "./CheckoutReview";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import CheckoutCheckbox from "@/components/common/CheckoutCheckbox";

export default function CheckoutPageContent() {
  return (
    <section className="py-10">
      <div className="baseContainer flex flex-col gap-6 md:gap-10">
        <CommonContentSection
          key={"shipping"}
          headerContent={"Shipping"}
          borderCss="border-none"
          MainContent={<CheckoutContents />}
        />
        <CommonContentSection
          key={"payment"}
          headerContent={"Payment"}
          MainContent={<CheckoutPayment />}
        />
        <CommonContentSection
          key={"review"}
          borderCss="border-none"
          paddingCss="p-0 py-3"
          headerContent={"Review & Confirm"}
          MainContent={<CheckoutReview />}
          SecondMainContent={
            <div className="py-5">
              <CheckoutCheckbox />

              <Link
                href={"/profile/order_history"}
                className="py-3 my-6 md:w-full bg-blue-500 flex justify-center items-center gap-2  rounded-full text-white"
              >
                Confirm <FaArrowRight />
              </Link>
            </div>
          }
        />
      </div>
    </section>
  );
}

function CheckoutContents() {
  return (
    <>
      <form className="space-y-2">
        <div className="grid md:grid-cols-2 gap-5 py-5">
          <div>
            <span
              htmlFor="name"
              className="block mb-2 text-sm md:text-[1rem] font-medium"
            >
              Full Name
            </span>
            <label
              htmlFor="name"
              className="relative flex justify-center items-center gap-2 py-0.5 md:py-2 bg-gray-100 px-4 border border-gray-200 rounded-full"
            >
              <div className="">
                <RxPerson className="text-gray-400" />
              </div>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="w-full relative py-2"
              />
            </label>
          </div>
          <div>
            <span
              htmlFor="district"
              className="block mb-2 text-sm md:text-[1rem] font-medium"
            >
              District
            </span>
            <label
              htmlFor="district"
              className="relative flex justify-center items-center gap-2 py-0.5 md:py-2 bg-gray-100 px-4 border border-gray-200 rounded-full"
            >
              <div className="">
                <IoLocationOutline className="text-gray-400" />
              </div>
              <input
                required
                type="text"
                name="district"
                id="district"
                placeholder="Enter Your District"
                className="w-full relative py-2"
              />
            </label>
          </div>
          <div>
            <span
              htmlFor="upazila"
              className="block mb-2 text-sm md:text-[1rem] font-medium"
            >
              Upazila/Thana
            </span>
            <label
              htmlFor="upazila"
              className="relative flex justify-center items-center gap-2 py-0.5 md:py-2 bg-gray-100 px-4 border border-gray-200 rounded-full"
            >
              <div className="">
                <IoLocationOutline className="text-gray-400" />
              </div>
              <input
                required
                type="text"
                name="upazila"
                id="upazila"
                placeholder="Enter Your Upazila/Thana"
                className="w-full relative py-2"
              />
            </label>
          </div>
          <div>
            <span
              htmlFor="address"
              className="block mb-2 text-sm md:text-[1rem] font-medium"
            >
              Address
            </span>
            <label
              htmlFor="address"
              className="relative flex justify-center items-center gap-2 py-0.5 md:py-2 bg-gray-100 px-4 border border-gray-200 rounded-full"
            >
              <div className="">
                <IoLocationOutline className="text-gray-400" />
              </div>
              <input
                required
                type="text"
                name="address"
                id="address"
                placeholder="Enter Your Address"
                className="w-full relative py-2"
              />
            </label>
          </div>
          <div>
            <span
              htmlFor="mobile"
              className="block mb-2 text-sm md:text-[1rem] font-medium"
            >
              Mobile
            </span>
            <label
              htmlFor="mobile"
              className="relative flex justify-center items-center gap-2 py-0.5 md:py-2 bg-gray-100 px-4 border border-gray-200 rounded-full"
            >
              <div className="">
                <LuPhone className="text-gray-400" />
              </div>
              <input
                required
                type="number"
                name="mobile"
                id="mobile"
                placeholder="Enter Your Mobile Number"
                className="w-full relative py-2"
              />
            </label>
          </div>
          <div>
            <span
              htmlFor="email"
              className="block mb-2 text-sm md:text-[1rem] font-medium"
            >
              Email
            </span>
            <label
              htmlFor="email"
              className="relative flex justify-center items-center gap-2 py-0.5 md:py-2 bg-gray-100 px-4 border border-gray-200 rounded-full"
            >
              <div className="">
                <CiMail className="text-gray-400" />
              </div>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full relative py-2"
              />
            </label>
          </div>
        </div>
        <div>
          <span
            htmlFor="comment"
            className="block mb-2 text-sm md:text-[1rem] font-medium"
          >
            Comment
          </span>
          <label
            htmlFor="comment"
            className="relative flex justify-center items-center gap-2 py-0.5 md:py-2 bg-gray-100 px-4 border border-gray-200 rounded-2xl"
          >
            <textarea
              required
              type="text"
              name="comment"
              id="comment"
              placeholder="comment"
              className="w-full h-37 md:h-34 relative py-2 resize-none"
            />
          </label>
        </div>
      </form>
    </>
  );
}
