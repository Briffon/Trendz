import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div class="home">
      <div class="img-carousel">
        <img
          src="https://cdn.discordapp.com/attachments/709431402256531639/774090550553870376/unknown.png"
          alt="hero image"
        />
        <NavLink class="btn shop-now-btn" to="/" className="link">
          Shop now
        </NavLink>
      </div>

      <div class="featured">
        <div class="featured-item">
          <img
            src="https://images.unsplash.com/photo-1580927240099-b05c5a007955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=629&q=80"
            alt="Jackets and Coats"
          />
          <h3>Jackets and Coats</h3>
        </div>
        <div class="featured-item">
          <img
            src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Shoes"
          />
          <h3>Shoes</h3>
        </div>
        <div class="featured-item">
          <img
            src="https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="T-shirts"
          />
          <h3>T-Shirts</h3>
        </div>
        <div class="featured-item">
          <img
            src="https://images.unsplash.com/photo-1547547908-dddfb9113547?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Dresses"
          />
          <h3>Dresses</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
