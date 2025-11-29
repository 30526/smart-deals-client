import React, { use } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import IridBG from "../../components/ReactBits/Iridescence/IridBG";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { signInUser, socialSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        e.target.reset();
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSocialLogin = () => {
    socialSignIn()
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6  min-h-screen">
      <div className=" md:block col-span-4 hidden">
        <IridBG />
      </div>
      <div className=" flex col-span-2 w-full justify-center items-center bg-white">
        <div className="max-w-md w-full p-8">
          <Link to={"/"}>
            <h2 className="text-3xl cursor-pointer font-bold text-center">
              Smart <span className="gradient-primary">Deals</span>
            </h2>
          </Link>
          <h1 className="text-xl font-semibold text-gray-800 my-8 text-center">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Login
            </button>
          </form>
          <button
            onClick={handleSocialLogin}
            className=" hover:border-gray-400 hover:bg-gray-100
           w-full mt-3 btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="mt-4 text-gray-600 text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              state={location?.state}
              className="text-purple-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
