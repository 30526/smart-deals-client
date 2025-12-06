import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const MyBids = () => {
  const [myBids, setMyBids] = useState([]);
  const { user } = use(AuthContext);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMyBids(data);
        });
    }
  }, [user]);
  
  // useEffect(() => {
  //   if (user?.email) {
  //     fetch(`http://localhost:3000/bids?email=${user.email}`, {
  //       headers: {
  //         authorization: `Bearer ${user.accessToken}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMyBids(data);
  //       });
  //   }
  // }, [user]);

  const handleDeleteBid = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      color: "#001931",
      icon: "warning",
      iconColor: "#9f62f2",
      background: "white",
      showCancelButton: true,
      confirmButtonColor: "#e73737",
      cancelButtonColor: "#9f62f2",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/bids/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Bid has been deleted.",
                color: "#001931",
                icon: "success",
                iconColor: "#9f62f2",
                background: "white",
              });
              const remainingBids = myBids.filter((bid) => bid._id !== _id);
              setMyBids(remainingBids);
            }
          });
        //
      }
    });
  };

  return (
    <div>
      <div className="relative translate-y-30">
        <h2 className="text-center text-4xl font-bold text-primary">
          My Bids : <span className="gradient-primary">{myBids.length}</span>
        </h2>
      </div>
      <div className="relative bg-gray-50 translate-y-40">
        <div className="overflow-x-auto container mx-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL N0</th>
                <th>Product</th>
                <th>Bid Price</th>
                <th>Contact</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myBids.map((bid, index) => (
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
                  <td>
                    <div className="badge badge-warning badge-xs text-gray-500">
                      {bid.status}
                    </div>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteBid(bid._id)}
                      className="btn btn-dash btn-error btn-xs"
                    >
                      Remove Bid
                    </button>
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

export default MyBids;
