// ProductCard.jsx
import React from "react";
import { Link } from "react-router";

/**
 * Props:
 *  - image: string (image URL)
 *  - title: string
 *  - priceMin: number or string
 *  - priceMax: number or string (optional)
 *  - onView: function (optional) -> callback for View Details button
 */
const ProductCard = ({ product }) => {
  const { _id, image, title, price_min, price_max } = product;

  return (
    <div className="max-w-lg bg-white rounded-lg shadow-sm p-4 border border-[#9f62f2]/50">
      <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <div className="w-3/4 h-3/4 bg-gray-300 rounded-md" />
        )}
      </div>

      {/* content */}
      <div className="mt-4">
        <h3 className="text-sm md:text-base font-medium text-gray-800 min-h-[2.25rem]">
          {title}
        </h3>

        <div className="mt-2">
          <p className="text-sm font-medium text-[#6b21a8]">
            $ {price_max} - {price_min}
          </p>
        </div>

        <div className="mt-4">
          <Link to={`/productDetails/${_id}`}>
            {" "}
            <button
              className="w-full py-2 rounded-md border border-[#9f62f2] text-sm font-medium text-white button-primary 
            cursor-pointer transition"
              aria-label={`View details for ${title}`}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
