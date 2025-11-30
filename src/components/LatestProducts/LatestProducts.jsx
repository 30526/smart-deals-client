import React, { use } from "react";
import ProductCard from "../ProductCard/ProductCard";

const LatestProducts = ({ latestProductsPromise }) => {
  const latestProducts = use(latestProductsPromise);
  return (
    <div className="relative mt-30 min-h-screen container mx-auto">
      <h2 className="text-primary text-4xl font-bold text-center mb-15">
        Recent <span className="gradient-primary">Products</span>{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6 p-4 md:p-0">
        {latestProducts.map((product, i) => (
          <ProductCard key={i} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
