import React from "react";
import { IoIosSearch } from "react-icons/io";
import IridBG from "../ReactBits/Iridescence/IridBG";
import { Link } from "react-router";

const HeroBanner = () => {
  return (
    <div className=" grid relative h-150 md:w-full overflow-hidden">
      <IridBG />
      <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center bg-white/30">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary text-center">
            {" "}
            Deal Your <span className="gradient-primary">Products</span>
            <br /> In a <span className="gradient-primary">Smart </span>Way
          </h1>
          <p className="text-center">
            SmartDeals helps you sell, resell, and shop from trusted local
            sellers, all in one place!
          </p>
          <div className="join">
            <div>
              <label className="input join-item rounded-l-full border-none md:w-80">
                <input type="search" placeholder="Search Your Product Here" />
              </label>
            </div>
            <button className="btn button-primary join-item rounded-r-full border-none">
              <IoIosSearch size={25} />
            </button>
          </div>
          <div className="flex gap-2">
            <Link to={"/products"}>
              {" "}
              <button className="btn button-primary  font-light">
                Watch All Products
              </button>
            </Link>
            <button className="btn border-[#9f62f2] bg-transparent gradient-primary  font-medium">
              Post an product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
