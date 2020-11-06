import React from "react";

const Header = () => {
  return (
    <div class="header">
      <img src={require("../../assets/logo.png")} />

      <input type="text" class="searchbar" />
    </div>
  );
};

export default Header;
