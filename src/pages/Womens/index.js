import React from "react";
import { NavLink } from "react-router-dom";

function Womens(){

  const shoeFilter =e=>{
    localStorage.setItem("filter",'{"gender":"Womens","category":"Shoes"}');
  }

  return (
    <div className="womens-screen">
      <div className="womens-heading">
        <h2>Womens</h2>
        <NavLink to="/Shopping" onClick={shoeFilter} className="link">
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

      <div className="womens-featured">
        <div className="womens-featured-item">
          <img src="" alt="featured item" />
          <p>ZTimbs</p>
          <button className="btn shop-btn">Shop</button>
        </div>
        <div className="womens-featured-item">
          <img src="" alt="featured item" />
          <p>Zrips</p>
          <button className="btn shop-btn">Shop</button>
        </div>
        <div className="womens-featured-item">
          <img src="" alt="featured item" />
          <p>CoatZ</p>
          <button className="btn shop-btn">Shop</button>
        </div>
        <div className="womens-featured-item">
          <img src="" alt="featured item" />
          <p>T-ShirtZ</p>
          <button className="btn shop-btn">Shop</button>
        </div>
      </div>
    </div>
  )
}

export default Womens;
