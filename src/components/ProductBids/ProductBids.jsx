import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const ProductBids = ({ _id: productId, bids, setBids }) => {
  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
      });
  }, [productId]);
  return (
    <div className="bg-gray-50 py-10">
      <h2 className="mb-8 text-4xl text-primary font-bold container mx-auto">
        Bids For This Product :{" "}
        <span className="gradient-primary">{bids.length}</span>
      </h2>
      <div>
        <div className="overflow-x-auto container mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL N0</th>
                <th>Name</th>
                <th>Bid Price</th>
                <th>Contact</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bids.map((bid, index) => (
                <tr key={index} className="bg-white">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={bid?.buyer_img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{bid.buyer_name}</div>
                        <div className="text-sm opacity-50">
                          {bid.buyer_email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold">৳ {bid.bid_price}</td>
                  <td>{bid.buyer_contact}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductBids;
