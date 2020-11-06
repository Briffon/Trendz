import React from "react";
import { NavLink } from "react-router-dom";

const Mens = () => {
  return (
    <div class="mens-screen">
      <div class="mens-heading">
        <h2>Mens</h2>
        <NavLink to="/" className="link">
          Shoes
        </NavLink>
        <NavLink to="/" className="link">
          Tops
        </NavLink>
        <NavLink to="/" className="link">
          Bottoms
        </NavLink>
        <NavLink to="/" className="link">
          Accessories
        </NavLink>
      </div>

      <div class="mens-featured">
        <div class="mens-featured-item">
          <img src="" alt="featured item" />
          <p>ZTimbs</p>
          <button class="btn shop-btn">Shop</button>
        </div>
        <div class="mens-featured-item">
          <img src="" alt="featured item" />
          <p>Zrips</p>
          <button class="btn shop-btn">Shop</button>
        </div>
        <div class="mens-featured-item">
          <img src="" alt="featured item" />
          <p>CoatZ</p>
          <button class="btn shop-btn">Shop</button>
        </div>
        <div class="mens-featured-item">
          <img src="" alt="featured item" />
          <p>T-ShirtZ</p>
          <button class="btn shop-btn">Shop</button>
        </div>
      </div>
    </div>
  );
};

export default Mens;
