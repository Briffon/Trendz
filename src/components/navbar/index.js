import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/Mens" className="link">
        Mens
      </NavLink>
      <NavLink to="/Womens" className="link">
        Womens
      </NavLink>
      <NavLink to="/" className="link">
        Kids
      </NavLink>
      <NavLink to="/" className="link">
        Accessories
      </NavLink>
    </div>
  );
};

export default Navbar;
