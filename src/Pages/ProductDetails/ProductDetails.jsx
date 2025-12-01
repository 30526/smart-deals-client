import React, { use, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router";

import { ArrowLeft } from "lucide-react";
import MakeBid from "../../components/Bids/MakeBid";
import ProductBids from "../../components/ProductBids/ProductBids";
import { AuthContext } from "../../Context/AuthContext";

const ProductDetails = () => {
  const [bids, setBids] = useState([]);
  const { user } = use(AuthContext);
  const openModalRef = useRef(null);

  const handleModalBtn = () => {
    openModalRef.current.showModal();
  };

  const product = useLoaderData();
  const {
    image,
    title,
    price_min,
    price_max,
    category,
    condition,
    usage,
    description,
    seller_name,
    seller_contact,
    email,
    seller_image,
    location,
    created_at,
    status,
    _id,
  } = product;

  return (
    <>
      <div className="w-full container grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto p-6 relative translate-y-20">
        {/* left section  */}
        <div className=" gap-8">
          {/* Left Section - Image */}
          <div className="w-full h-[350px] bg-gray-200 rounded-xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Description + Condition */}
          <div className="mt-10">
            {/* Product Description */}
            <div className="bg-white shadow rounded-xl p-4 border border-[#9f62f2]/50">
              <h3 className="text-xl  text-primary font-bold mb-3">
                Product Description
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-primary font-medium">
                  <span className="font-semibold gradient-primary">
                    Condition:
                  </span>{" "}
                  {condition}
                </p>
                <p className="text-primary font-medium">
                  <span className="font-semibold gradient-primary">Usage:</span>{" "}
                  {usage}
                </p>
              </div>
              <div className="border-1 border-[#9f62e3] mt-3"></div>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="space-y-4">
          <Link to={"/"}>
            {" "}
            <button className="flex items-center gap-2 text-gray-600 hover:text-black mb-6">
              <ArrowLeft size={18} /> Back To Products
            </button>
          </Link>
          <h1 className="text-4xl text-primary font-bold">{title}</h1>
          <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">
            {category}
          </span>

          <div className=" bg-white rounded-xl border border-[#9f62f2]/50 p-4">
            <p className="text-2xl font-bold text-green-600">
              ৳{price_min} - {price_max}
            </p>
            <p className="text-gray-500 text-sm">Price starts from</p>
          </div>

          {/* Product Details */}
          <div className="bg-white shadow rounded-xl p-4 border border-[#9f62f2]/50">
            <h3 className="font-bold mb-4 text-xl text-primary">
              Product Details
            </h3>
            <div>
              <p>
                <span className="font-semibold text-primary">Product ID:</span>{" "}
                {_id}
              </p>
              <p>
                <span className="font-semibold text-primary">Posted:</span>{" "}
                {new Date(created_at).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Seller Section */}
          <div className="bg-white shadow rounded-xl p-4 border border-[#9f62f2]/50">
            <h3 className="font-bold mb-3 text-xl text-primary">
              Seller Information
            </h3>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={seller_image}
                alt={seller_name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#9f62f2]/50"
              />

              <div>
                <p className="font-semibold text-primary">{seller_name}</p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>

            <p>
              <span className="font-semibold text-primary">Location:</span>{" "}
              {location}
            </p>
            <p>
              <span className="font-semibold text-primary">Contact:</span>{" "}
              {seller_contact}
            </p>
            <p>
              <span className="font-semibold text-primary">Status:</span>{" "}
              <span className="px-2 py-1 rounded text-white bg-yellow-500 text-sm">
                {status}
              </span>
            </p>
          </div>
          {/* Buy Button */}
          <div className="flex items-end">
            <button
              onClick={handleModalBtn}
              className="w-full button-primary py-3 cursor-pointer rounded-xl text-lg font-semibold"
            >
              I Want Buy This Product
            </button>
          </div>
        </div>

        <MakeBid
          user={user}
          bids={bids}
          setBids={setBids}
          product={product}
          price_max={price_max}
          openModalRef={openModalRef}
        ></MakeBid>
      </div>
      <div className="mt-50">
        <ProductBids
          bids={bids}
          setBids={setBids}
          user={user}
          _id={_id}
        ></ProductBids>
      </div>
    </>
  );
};

export default ProductDetails;
