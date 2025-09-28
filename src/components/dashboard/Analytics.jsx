import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";

const Analytics = () => {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-9">
    //   {/* card 1 */}
    //   <div className="border-2 border-[#D1D1D680] lg:px-8 lg:py-8 rounded-xl">
    //     <div className="flex items-center justify-between ">
    //       <div className="rounded-full p-2 bg-[#60FF301A]">
    //         <Image
    //           src="/doller.png"
    //           width="40"
    //           height="40"
    //           alt="dollar"
    //           className=""
    //         />
    //       </div>
    //       <div>
    //         <BsThreeDotsVertical size={24} color="gray" />
    //       </div>
    //     </div>
    //     <div className="md:mt-5 relative ">
    //       <p className="text-lg mb-2 font-normal text-[#636366]">Top Sales</p>
    //       <div className="lg:flex justify-between w-full">
    //         <h1 className="text-3xl font-bold flex items-center ">
    //           <TbCurrencyTaka /> 12,50
    //         </h1>
    //         <br />
    //         <h3 className="text-[#22C55E] flex items-baseline pt-3">
    //           + 36% <FaArrowUp />
    //         </h3>
    //       </div>
    //     </div>
    //   </div>

    //   {/* card 2 */}
    //   <div className="border-2 border-[#D1D1D680] px-8 py-8 rounded-md">
    //     <div className="flex items-center justify-between ">
    //       <div className="rounded-full p-2 bg-[#FFB0301A]">
    //         <Image
    //           src="/usr.png"
    //           width="40"
    //           height="40"
    //           alt="dollar"
    //           className=""
    //         />
    //       </div>
    //       <div>
    //         <BsThreeDotsVertical size={24} color="gray" />
    //       </div>
    //     </div>
    //     <div className="md:mt-5 relative ">
    //       <p className="text-lg mb-2 font-normal text-[#636366]">
    //         Total Retailers
    //       </p>
    //       <div className="md:flex justify-between items-baseline">
    //         <h1 className="text-3xl font-bold flex items-center ">120</h1>
    //         <div className="text-[#22C55E] flex justify-center items-baseline">
    //           + 36%
    //           <span>
    //             <FaArrowUp />
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* card 3 */}
    //   <div className="border-2 border-[#D1D1D680] px-8 py-8 rounded-md">
    //     <div className="flex items-center justify-between ">
    //       <div className="rounded-full p-2 bg-[#EE30FF1A]">
    //         <Image
    //           src="/timer.png"
    //           width="40"
    //           height="40"
    //           alt="dollar"
    //           className=""
    //         />
    //       </div>
    //       <div>
    //         <BsThreeDotsVertical size={24} color="gray" />
    //       </div>
    //     </div>
    //     <div className="mt-5 relative ">
    //       <p className="text-lg mb-2 font-normal text-[#636366]">
    //         Pending Requests
    //       </p>
    //       <h1 className="text-3xl font-bold flex items-center "> 05</h1>
    //       <span className="text-[#22C55E] absolute right-3 bottom-0.5 flex items-center justify-end px-5">
    //         {" "}
    //         + 36% <FaArrowUp c />
    //       </span>
    //     </div>
    //   </div>
    //   {/* card 4 */}
    //   <div className="border-2 border-[#D1D1D680] px-8 py-8 rounded-md">
    //     <div className="flex items-center justify-between ">
    //       <div className="rounded-full p-2 bg-[#3E30FF1A]">
    //         <Image
    //           src="/product.png"
    //           width="40"
    //           height="40"
    //           alt="dollar"
    //           className=""
    //         />
    //       </div>
    //       <div>
    //         <BsThreeDotsVertical size={24} color="gray" />
    //       </div>
    //     </div>
    //     <div className="mt-5 relative ">
    //       <p className="text-lg mb-2 font-normal text-[#636366]">
    //         Total Products
    //       </p>
    //       <h1 className="text-3xl font-bold flex items-center "> 350</h1>
    //       <span className="text-[#22C55E] absolute right-3 bottom-0.5 flex items-center justify-end px-5">
    //         {" "}
    //         + 36% <FaArrowUp />
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 - Top Sales */}
      <div className="border-2 border-[#D1D1D680] px-6 py-6 rounded-xl flex flex-col justify-between h-full overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="rounded-full p-2 bg-[#60FF301A] shrink-0">
            <Image src="/doller.png" width={40} height={40} alt="dollar" />
          </div>
          <BsThreeDotsVertical size={22} color="gray" />
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <p className="text-sm md:text-base font-medium text-[#636366]">
            Top Sales
          </p>
          <div className="flex  items-end justify-between lg:gap-2">
            <h1 className="text-xl md:text-2xl font-bold flex items-center gap-1 leading-none">
              12,50+
            </h1>
            <span className="text-[#22C55E] text-sm md:text-base flex items-center gap-1 leading-tight">
              +36% <FaArrowUp />
            </span>
          </div>
        </div>
      </div>

      {/* Card 2 - Total Retailers */}
      <div className="border-2 border-[#D1D1D680] px-6 py-6 rounded-xl flex flex-col justify-between h-full">
        <div className="flex items-center justify-between">
          <div className="rounded-full p-2 bg-[#FFB0301A] shrink-0">
            <Image src="/usr.png" width={40} height={40} alt="user" />
          </div>
          <BsThreeDotsVertical size={22} color="gray" />
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <p className="text-sm md:text-base font-medium text-[#636366]">
            Total Retailers
          </p>
          <div className="flex items-end justify-between gap-2">
            <h1 className="text-xl md:text-2xl font-bold leading-none">120+</h1>
            <span className="text-[#22C55E] text-sm md:text-base flex items-center gap-1 leading-tight">
              +36% <FaArrowUp />
            </span>
          </div>
        </div>
      </div>

      {/* Card 3 - Pending Requests */}
      <div className="border-2 border-[#D1D1D680] px-6 py-6 rounded-xl flex flex-col justify-between h-full">
        <div className="flex items-center justify-between">
          <div className="rounded-full p-2 bg-[#EE30FF1A] shrink-0">
            <Image src="/timer.png" width={40} height={40} alt="timer" />
          </div>
          <BsThreeDotsVertical size={22} color="gray" />
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <p className="text-sm md:text-base font-medium text-[#636366]">
            Pending Requests
          </p>
          <div className="flex items-end justify-between gap-2">
            <h1 className="text-xl md:text-2xl font-bold leading-none">05</h1>
            <span className="text-[#22C55E] text-sm md:text-base flex items-center gap-1 leading-tight">
              +36% <FaArrowUp />
            </span>
          </div>
        </div>
      </div>

      {/* Card 4 - Total Products */}
      <div className="border-2 border-[#D1D1D680] px-6 py-6 rounded-xl flex flex-col justify-between h-full">
        <div className="flex items-center justify-between">
          <div className="rounded-full p-2 bg-[#3E30FF1A] shrink-0">
            <Image src="/product.png" width={40} height={40} alt="product" />
          </div>
          <BsThreeDotsVertical size={22} color="gray" />
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <p className="text-sm md:text-base font-medium text-[#636366]">
            Total Products
          </p>
          <div className="flex items-end justify-between gap-2">
            <h1 className="text-xl md:text-2xl font-bold leading-none">350</h1>
            <span className="text-[#22C55E] text-sm md:text-base flex items-center gap-1 leading-tight">
              +36% <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
