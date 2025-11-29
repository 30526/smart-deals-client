import React, { use } from "react";
import MyLinks from "../MyLinks/MyLinks";
import { IoMdLogIn } from "react-icons/io";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";
import auth from "../../Firebase/firebase.init";

const Navbar = () => {
  const { user, loading, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser(auth)
      .then(() => {
        toast.success("Signed out successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <MyLinks to={"/"}> Home</MyLinks>
      </li>
      <li>
        <MyLinks to={"/products"}> All Products</MyLinks>
      </li>
      <li>
        <MyLinks to={"/myProducts"}> My Products</MyLinks>
      </li>
      <li>
        <MyLinks to={"/myBids"}> My Bids</MyLinks>
      </li>
    </>
  );
  return (
    <nav className=" w-full sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-sm">
      <div className="container mx-auto flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">
            Smart<span className="gradient-primary">Deals</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <button className="btn button-primary">
              <IoMdLogIn size={20} />{" "}
              <span className="loading loading-dots loading-xl"></span>
            </button>
          ) : user ? (
            <button onClick={handleSignOut} className="btn button-primary">
              <IoMdLogIn size={20} /> Sign Out
            </button>
          ) : (
            <MyLinks to={"/login"}>
              <button className="btn button-primary">
                <IoMdLogIn size={20} /> Login
              </button>
            </MyLinks>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
