import React from "react";

const Header = () => {
  return (
    <div class="header">
       <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
      <img
        class="logo"
        src="https://cdn.discordapp.com/attachments/709431402256531639/809783132059861012/unknown.png"
        alt="Trendz logo"
      />
      <h1 class="mobile-logo">T<span class="logo-special logo-r">r</span>end<span class="logo-special">z</span></h1>
      <div class="interaction">
        <form class="search">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
            alt="search icon"
            class="search-icon"
          />
          <input type="text" class="searchbar" />
        </form>
        <img
          class="shopping-cart"
          src="https://github.com/Briffon/Trendz/blob/main/src/assets/cart.png?raw=true"
          alt="shopping cart"
        />
      </div>
    </div>
  );
};

export default Header;
