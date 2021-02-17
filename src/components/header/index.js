import React from "react";

const Header = () => {
  return (
    <div className="header">
       <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
      <img
        className="logo"
        src="https://cdn.discordapp.com/attachments/709431402256531639/809783132059861012/unknown.png"
        alt="Trendz logo"
      />
      <h1 className="mobile-logo">T<span className="logo-special logo-r">r</span>end<span className="logo-special">z</span></h1>
      <div className="interaction">
        <form className="search">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
            alt="search icon"
            className="search-icon"
          />
          <input type="text" className="searchbar" />
        </form>
        <img
          className="shopping-cart"
          src="https://github.com/Briffon/Trendz/blob/main/src/assets/cart.png?raw=true"
          alt="shopping cart"
        />
      </div>
    </div>
  );
};

export default Header;
