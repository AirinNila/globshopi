import { TbCurrencyTaka } from "react-icons/tb";

export default function CheckoutReview() {
  const firstdata = [
    { "Full Name": "Cody Fisher" },
    { District: "Dhaka" },
    { Address: "Mirpur" },
    { "Upazila/Thana": "Mirpur" },
    { Mobile: "01234568888" },
    { Email: "Email@example.com" },
  ];

  const seconddata = [
    { "Product Name": "iPhone 16e" },
    { Color: "White" },
    { Price: `118,000৳` },
    { Delivery: "60৳" },
    { "Sub-Total": "118,000৳" },
    { Total: "118,060৳" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-3 md:gap-6">
      <ReviewCard arr={firstdata} gap={"md:gap-50"} />
      <ReviewCard arr={seconddata} gap={"md:gap-70"} />
    </div>
  );
}

const ReviewCard = ({ arr, gap }) => {
  return (
    <div className="border-gray-200 border rounded-3xl py-4 px-5">
      {arr.map((e) => {
        const key = Object.keys(e)[0];
        const value = e[key];

        return (
          <div
            key={key} // Use the unique key (e.g., "Full Name", "District")
            className={`grid grid-cols-2 py-2 border-b border-gray-200 text-sm md:text-[1.1rem] ${gap}`}
          >
            <h5 className="font-medium">{key}</h5>
            <span className="w-fit">{value}</span>
          </div>
        );
      })}
    </div>
  );
};
