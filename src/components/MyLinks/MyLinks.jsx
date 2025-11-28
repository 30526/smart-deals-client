import React from "react";
import { NavLink } from "react-router";

const MyLinks = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "gradient-primary font-semibold" : "font-semibold")}
    >
      {children}
    </NavLink>
  );
};

export default MyLinks;
