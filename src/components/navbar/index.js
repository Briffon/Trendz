import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/" className="link">
        Mens
      </NavLink>
      <NavLink to="/" className="link">
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
