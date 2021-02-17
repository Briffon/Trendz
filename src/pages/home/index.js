import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="img-carousel">
        <img
          src="./images/hero.png"
          alt="hero"
        />
        <NavLink className="btn shop-now-btn" to="/" className="link">
          Shop now
        </NavLink>
      </div>

      <div className="featured">
        <div className="featured-item">
          <img
            src="./images/jackets.jpg"
            alt="Jackets and Coats"
          />
          <h3>Jackets and Coats</h3>
        </div>
        <div className="featured-item">
          <img
            src="./images/shoes.png"
            alt="Shoes"
          />
          <h3>Shoes</h3>
        </div>
        <div className="featured-item">
          <img
            src="./images/tshirt.jpg"
            alt="T-shirts"
          />
          <h3>T-Shirts</h3>
        </div>
        <div className="featured-item">
          <img
            src="./images/dresses.png"
            alt="Dresses"
          />
          <h3>Dresses</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
