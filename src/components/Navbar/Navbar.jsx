import React, { use } from "react";
import MyLinks from "../MyLinks/MyLinks";
import { IoMdLogIn } from "react-icons/io";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";
import auth from "../../Firebase/firebase.init";
import { useLocation } from "react-router";

const Navbar = () => {
  const { user, loading, signOutUser } = use(AuthContext);
  const location = useLocation();

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
    <nav
      className={`absolute z-100 right-0 left-0 top-4 backdrop-blur-xl border md:w-5xl  
          mx-auto rounded-full
        ${
          location.pathname != "/"
            ? "bg-white border-[#9f62f2] shadow-md"
            : "border-white/60 "
        }`}
    >
      <div className="  flex px-8">
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
          <a className="cursor-pointer text-xl font-bold">
            Smart<span className="gradient-primary">Deals</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">{links}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <button className="flex gap-1 items-center py-1 px-4 rounded-full button-primary font-medium">
              <IoMdLogIn size={20} />{" "}
              <span className="loading loading-dots loading-xl"></span>
            </button>
          ) : user ? (
            <>
              <div className="avatar avatar-online mr-2">
                <div className="w-8 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className=" flex gap-1 items-center py-1 px-4 rounded-full button-primary font-medium"
              >
                <IoMdLogIn size={20} /> Log Out
              </button>
            </>
          ) : (
            <MyLinks to={"/login"}>
              <button className="flex gap-1 items-center py-1 px-4 rounded-full button-primary font-medium">
                <IoMdLogIn size={20} /> Log In
              </button>
            </MyLinks>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
