import React, { useState, useContext, useRef, useEffect } from "react";
import Search from "./Search";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../Context";

const Header = () => {
  const scrollRef = useRef(null);
  const { cart, updateQuery } = useContext(Context);

  const cartIcon =
    cart.length > 0 ? (
      <i className="ri-shopping-cart-fill cart icon"></i>
    ) : (
      <i className="ri-shopping-cart-line cart icon"></i>
    );

    useEffect(() => {
      window.addEventListener("scroll", () => scrollRef.current.style.position = "sticky");
      return () => window.removeEventListener("scroll", () => scrollRef.current.style.position = "sticky")
    }, [])

    // useEffect(() => {
    //   window.addEventListener(
    //     "scrollend",
    //     () => (scrollRef.current.style.position = "relative")
    //   );
    //   return () =>
    //     window.removeEventListener(
    //       "scrollend",
    //       () => (scrollRef.current.style.position = "relative")
    //     );
    // }, []);

    console.log(scrollRef.current);

  return (
    <header ref={scrollRef}>
      <div className="header container" id="header">
        <div className="logo-div">
          <Link to={"/"}>
            <h2 className="logo" onClick={() => updateQuery("")}>
              Phot
              <img
                src="./images/camera-lens-fill.svg"
                className="lens"
                alt=""
              />
              -Kasua
            </h2>
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
