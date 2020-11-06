import React from "react";

const Header = () => {
  return (
    <div class="header">
      <img
        class="logo"
        src="https://github.com/Briffon/Trendz/blob/main/src/assets/logo.png?raw=true"
        alt="Trendz logo"
      />
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
