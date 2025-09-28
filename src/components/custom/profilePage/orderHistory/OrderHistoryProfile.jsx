"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaRegEdit } from "react-icons/fa";
import { IoCloseCircleOutline, IoLocationOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { RxPerson } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { LuPhone } from "react-icons/lu";
import { GrDownload } from "react-icons/gr";
import { CiLock, CiMail } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

import CommonContentSection from "@/components/common/CommonContentSection";
import React from "react";
import { TbFileInvoice } from "react-icons/tb";

export default function OrderHistoryProfile() {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      {modal && (
        <div className="shadow-2xl w-full h-screen fixed left-0 top-0 z-50 flex items-center justify-center">
          <div className="h-screen w-full absolute inset-0 bg-black/40 backdrop-blur-[1px] -z-10" />

          {/* modal Box */}
          <div className="md:w-[641px] max-h-[90vh] w-full my-5 mx-2 py-4 md:py-7 px-4 md:px-10 border border-gray-200 md:mx-auto bg-white shadow-2xl rounded-2xl flex flex-col">
            <div
              className="flex justify-end cursor-pointer"
              onClick={() => setModal(false)}
            >
              <IoCloseCircleOutline className="font-bold size-6" />
            </div>

            {/* main content */}
            <div className="flex flex-col gap-4 overflow-y-auto pr-2">
              <div>
                <h5 className="text-xl font-medium">Order Details</h5>
              </div>

              <div className="border-gray-300 pb-5 border-b-2 border-dashed">
                {[
                  { "Order ID": "#ORD-2025-00045" },
                  { "Order Date": "03-Sep-2025" },
                  { Status: `Pending` },
                  { Payment: "Unpaid (bKash)" },
                ].map((e) => {
                  const key = Object.keys(e)[0];
                  const value = e[key];

                  return (
                    <div
                      key={key}
                      className="flex justify-between py-2 border-b border-gray-200 text-sm md:gap-70"
                    >
                      <h5>{key}:</h5>
                      {key === "Status" ? (
                        <span className="bg-orange-50 text-orange-600 p-1 rounded-full w-fit text-xs">
                          {value}
                        </span>
                      ) : (
                        <span className="w-fit">{value}</span>
                      )}
                    </div>
                  );
                })}
              </div>

              <h5 className="font-medium text-xl">Product List</h5>

              <div className="border-gray-300 pb-5 border-b-2 border-dashed">
                <div className="grid  py-2 text-sm gap-2">
                  {[
                    {
                      img: "/images/productsdetails/iphone_pink.png",
                      title: "iPhone 16e",
                      qty: "1",
                      price: "৳8,000",
                    },
                    {
                      img: "/images/productsdetails/iphone_pink.png",
                      title: "iPhone 16e",
                      qty: "1",
                      price: "৳8,000",
                    },
                  ].map((e) => {
                    return (
                      <ModalProductCard
                        imgSrc={e.img}
                        qty={e.qty}
                        title={e.title}
                        key={e.img}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="border-gray-300 pb-5 border-b-2 border-dashed">
                {[
                  { Subtotal: "৳9,200" },
                  { Shipping: "৳100" },
                  { Shipping: "Abdur Rahman, Mirpur, Dhaka, 01XXXXXXXXX" },
                ].map((e) => {
                  const key = Object.keys(e)[0];
                  const value = e[key];

                  return (
                    <div
                      key={key}
                      className="flex justify-between py-2 border-b border-gray-200 text-sm md:gap-70"
                    >
                      <h5>{key}:</h5>
                      {key === "Status" ? (
                        <span className="bg-orange-50 text-orange-600 p-1 rounded-full w-fit text-xs">
                          {value}
                        </span>
                      ) : (
                        <span className="w-fit">{value}</span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="px-4 rounded-2xl gap-3 md:gap-6 flex justify-center items-center max-md:flex-col w-full">
                <Link
                  href={"/products"}
                  className="transition-all duration-300 py-2 md:my-6 w-full text-red-500 flex justify-center items-center gap-2 rounded-full border-red-500 border cursor-pointer hover:bg-red-500 hover:text-white max-md:text-sm"
                >
                  <IoCloseCircleOutline /> Cancel
                </Link>
                <Link
                  href={"/cart"}
                  className="transition-all duration-300 py-2 md:my-6 w-full bg-blue-500 flex justify-center items-center gap-2 rounded-full text-white max-md:text-sm hover:bg-blue-600"
                >
                  <TbFileInvoice className="text-gray-50" /> Invoice
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-10">
        <div className="baseContainer grid gap-15 overflow-hidden">
          <CommonContentSection
            key={"ProfileContents"}
            headerContent={"Profile"}
            MainContent={<ProfileContents />}
            flexCss="max-md:items-start"
            SecondMainContent={
              <Link
                href={"/dashboard/profile"}
                className="py-3 my-6 md:w-full bg-blue-500 flex justify-center items-center gap-2  rounded-full text-white"
              >
                Confirm <FaArrowRight />
              </Link>
            }
          />

          <CommonContentSection
            key={"OrderHistory"}
            headerContentCss={"flex justify-between items-center"}
            headerContent={
              <>
                Order History
                <Link
                  href={""}
                  className="flex py-2 text-gray-500 px-3 border border-gray-200 rounded-full text-sm justify-center items-center gap-2"
                >
                  Sort By <VscSettings />
                </Link>
              </>
            }
            MainContent={<OrderHistory modal={modal} setModal={setModal} />}
            flexCss="max-md:items-start"
          />
        </div>
      </section>
    </>
  );
}

const ModalProductCard = ({ imgSrc, qty, title }) => {
  return (
    <div className="flex bg-gray-50 max-md:flex-col justify-between items-center rounded-2xl border border-gray-100 p-2 h-full w-full">
      <div className="flex justify-center items-center gap-3 md:gap-6 max-md:justify-start max-md:w-full">
        <Image src={imgSrc} alt="" width={50} height={50} className="" />
        <div className="flex flex-col justify-center items-start gap-1 ">
          <h5 className="text-md md:text-lg">{title}</h5>
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center gap-4 ">
        <span className="text-md font-medium">Qty: {qty}</span>
      </div>

      <div className="flex md:hidden justify-between items-center gap-4 w-full">
        <span className="text-md font-medium">Qty: {qty}</span>
        <span className="text-md font-medium">৳8,000</span>
      </div>

      <div className="hidden md:flex justify-center items-center gap-4 ">
        <span className="text-md font-medium">৳8,000</span>
      </div>
    </div>
  );
};

function OrderHistory({ modal, setModal }) {
  return (
    <>
      <OrderHistoryCard modal={modal} setModal={setModal} />
      <OrderHistoryCard modal={modal} setModal={setModal} />
      <OrderHistoryCard modal={modal} setModal={setModal} />
      <OrderHistoryCard modal={modal} setModal={setModal} />
    </>
  );
}

function OrderHistoryCard({ modal, setModal }) {
  return (
    <div className="flex max-md:flex-col justify-between items-center rounded-2xl border border-gray-200 p-2 w-full">
      <div className="flex justify-center items-center gap-6">
        <Image
          src={"/images/productsdetails/iphone_pink.png"}
          alt=""
          width={80}
          height={80}
          className=""
        />
        <div className="flex max-md:flex-col justify-center md:items-center gap-2 md:gap-6">
          <h5 className="text-2xl font-semibold">iPhone 16e</h5>
          <span className="bg-orange-50 w-fit  text-sm text-orange-500 p-1">
            Pending
          </span>
          <span className="">৳8,000</span>
          <span className="">৳8,000</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button
          className="px-3 py-1.5 flex justify-center items-center border text-blue-500 font-semibold border-blue-200  gap-1 rounded-full hover:bg-blue-50 cursor-pointer"
          onClick={() => setModal(true)}
        >
          View <IoIosArrowForward />
        </button>
        <Link
          href={""}
          className="px-3 py-1.5 flex justify-center items-center border text-white font-semibold border-blue-200 bg-blue-500 gap-1 rounded-full hover:bg-blue-600"
        >
          Invoice <GrDownload />
        </Link>
      </div>
    </div>
  );
}

function ProfileContents() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-3">
          <Image
            src="/images/profile/orderhistory/roky.jpg"
            alt="profile image"
            width={170}
            height={170}
            className="rounded-2xl"
          />
          <div className="space-y-1 md:space-y-4 grid max-md:pb-2">
            <h3 className="text-3xl">Roky Islam</h3>
            <span>Dhaka, Mirpur,Bangladesh</span>
            <span>michelle.rivera@example.com</span>
            <span>+880123456789</span>
          </div>
        </div>
        <div className="max-md:w-full my-1 max-md:justify-start flex">
          <Link
            href={"/dashboard/profile"}
            className="py-2 px-4 justify-center items-center gap-2 rounded-full bg-blue-500 flex text-white"
          >
            Edit Profile
            <FaRegEdit className="text-gray-50" />
          </Link>
        </div>
      </div>
      <form noValidate="" action="" className="space-y-6">
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
                type="number"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full relative py-2"
              />
            </label>
          </div>
          <div>
            <span
              htmlFor="password"
              className="block mb-2 text-xs md:text-sm font-medium"
            >
              Password{" "}
            </span>
            <label
              htmlFor="password"
              className="relative flex justify-center items-center gap-2 py-0.5 md:py-2 bg-gray-100 px-4 border border-gray-200 rounded-full"
            >
              <div className="">
                <CiLock className="text-gray-400" />
              </div>
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="w-full relative py-2"
              />
            </label>
          </div>
          <div>
            <span
              htmlFor="comfirmpassword"
              className="block mb-2 text-xs md:text-sm font-medium"
            >
              Comfirm Password
            </span>
            <label
              htmlFor="comfirmpassword"
              className="relative flex justify-center items-center gap-2 py-0.5 md:py-2 bg-gray-100 px-4 border border-gray-200 rounded-full"
            >
              <div className="">
                <CiLock className="text-gray-400" />
              </div>
              <input
                required
                type="password"
                name="comfirmpassword"
                id="comfirmpassword"
                placeholder="********"
                className="w-full relative py-2"
              />
            </label>
          </div>
        </div>
      </form>
    </>
  );
}
