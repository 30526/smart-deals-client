import React, { use,  useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const RegisterPage = () => {
  const { signInUser } = use(AuthContext);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!agreed) {
      toast.error("You must agree to the Terms and Policy!");
      return;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 border min-h-screen">
      <div className="hidden md:block col-span-4">
        <img
          className="h-full object-cover"
          src="https://i.ibb.co.com/R4p0pMGF/9520451.jpg"
          alt=""
        />
      </div>
      <div className="flex col-span-2 w-full justify-center items-center bg-white">
        <div className="max-w-md w-full p-8">
          <Link to={"/"}>
            <h2 className="text-3xl cursor-pointer font-bold text-center">
              Smart <span className="gradient-primary">Deals</span>
            </h2>
          </Link>
          <h1 className="text-xl font-semibold text-gray-800 my-10 text-center">
            Create Account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <p>Agree to the Terms and Policy</p>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-gray-600 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
