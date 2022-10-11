import React, { useState, useContext, useRef, useEffect } from "react";
import Search from "./Search";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../Context";

const Header = () => {

  const { cart, updateQuery } = useContext(Context);

  const cartIcon =
    cart.length > 0 ? (
      <i className="ri-shopping-cart-fill cart icon"></i>
    ) : (
      <i className="ri-shopping-cart-line cart icon"></i>
    );

  return (
    <header>
      <div className="header container">
        <div className="logo-div">
          <Link to={"/"}>
            <h2 className="logo"  onClick={() => updateQuery("")}>Phot<img src="./images/camera-lens-fill.svg" className="lens" alt="" />-Kasua</h2>
          </Link>
        </div>
        <nav className="nav">
          <Link to={"/"}>
            <i
              className="ri-home-5-fill home icon"
              onClick={() => updateQuery("")}
            ></i>
          </Link>
          <Link to={"/cart"}>{cartIcon}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
