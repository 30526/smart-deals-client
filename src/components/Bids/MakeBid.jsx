import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const MakeBid = ({ openModalRef, price_max, product }) => {
  const { _id: productId } = product;
  const { user } = use(AuthContext);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const contact = e.target.contactNumber.value;
    // console.log(_id, name, email, price, contact);

    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      bid_price: price,
      buyer_contact: contact,
      status: "Pending",
    };

    // send data to DB
    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          openModalRef.current.close();
          Swal.fire({
            position: "center",
            icon: "success",
            iconColor: "#9f62f2",
            border: "1px solid #9f62f2",
            color: "#001931",
            background: "white",
            title: "Your bid has been Placed",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  return (
    <dialog
      ref={openModalRef}
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <div className="modal-action grid grid-cols-1">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-8">
            Give Seller Your Offered Price
          </h2>
          <form onSubmit={handleBidSubmit}>
            {/* Buyer Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Buyer Name</label>
                <br />
                <input
                  name="name"
                  type="text"
                  defaultValue={user.displayName}
                  readOnly
                  className="input-style input"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Buyer Email</label>
                <br />
                <input
                  name="email"
                  type="email"
                  defaultValue={user.email}
                  readOnly
                  className="input-style input"
                />
              </div>
            </div>

            {/* Buyer Image URL */}
            <div className="space-y-2 mt-2">
              {/* Bid Price */}
              <div>
                <label className="text-sm font-medium">Place your Price</label>
                <br />
                <input
                  name="price"
                  required
                  defaultValue={price_max}
                  type="number"
                  placeholder="e.g. 12000"
                  className="input-style input"
                />
              </div>

              {/* Contact Info */}
              <div>
                <label className="text-sm font-medium">Contact Info</label>
                <br />
                <input
                  name="contactNumber"
                  type="number"
                  placeholder="e.g. +8801XXXXXXXXX"
                  required
                  defaultValue={"+88013XXXXXXXX"}
                  className="input-style input"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => openModalRef.current.close()}
                className="btn px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2 rounded-lg text-white button-primary btn"
              >
                Submit Bid
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default MakeBid;
