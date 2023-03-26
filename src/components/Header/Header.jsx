import React from "react";
import "./header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/shop">shop</a>
        <a href="/order">order</a>
        <a href="/inventory">inventory</a>
        <a href="/login">login</a>
      </div>
    </nav>
  );
};

export default Header;
