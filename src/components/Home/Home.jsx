import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import LatestProducts from "../LatestProducts/LatestProducts";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner></HeroBanner>
      <LatestProducts
        latestProductsPromise={latestProductsPromise}
      ></LatestProducts>
    </div>
  );
};

export default Home;
