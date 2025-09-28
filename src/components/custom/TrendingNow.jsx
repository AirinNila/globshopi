import Link from "next/link";
import React from "react";
import ProductCard from "./productPage/ProductCard";

const TrendingProducts = () => {
  const trendingProducts = [
    {
      product_name: "Amazfit Bip 5 Smartwatch",
      image_url: "/images/productsdetails/iphone_white.png",
      rating: 4.9,
      discount_percentage: "10%",
      old_price: "৳ 1,399",
      new_price: "৳ 1,199",
      stock: 13,
    },
    {
      product_name: "Logitech MX Anywhere 3 Mouse",
      image_url: "/images/productsdetails/iphone_black.png",
      rating: 4.9,
      discount_percentage: "10%",
      old_price: "৳ 1,399",
      new_price: "৳ 1,199",
      stock: 13,
    },
    {
      product_name: "IMILAB C20 Security Camera",
      image_url: "/images/productsdetails/iphone_blue.png",
      rating: 4.9,
      discount_percentage: "10%",
      old_price: "৳ 1,399",
      new_price: "৳ 1,199",
      stock: 13,
    },
    {
      product_name: "Haylou X1 Neo TWS Earbuds",
      image_url: "/images/productsdetails/iphone_pink.png",
      rating: 4.9,
      discount_percentage: "10%",
      old_price: "৳ 1,399",
      new_price: "৳ 1,199",
      stock: 13,
    },
  ];

  return (
    <section className="py-15">
      <div className="baseContainer flex flex-col gap-1 md:gap-2">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold">Mobile Phone</h2>
            <p className="font-light text-sm">
              Fresh picks — just landed in our store.
            </p>
          </div>
          <Link
            href={"/products"}
            className=" text-blue-500 hover:text-blue-600"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {trendingProducts.map((product, i) => (
            <ProductCard
              href={`/products/product${i}nu`}
              cardFirstName={product.product_name}
              imgSrc={product.image_url}
              discount={product.discount_percentage}
              key={`${product.product_name}:${i}`}
              newPrice={product.new_price}
              oldPrice={product.old_price}
              rating={product.rating}
              stock={product.stock}
              cartLink="/cart"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
