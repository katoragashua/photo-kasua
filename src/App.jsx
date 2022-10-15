import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";
import Info from "./pages/Info";
import { useLocation } from "react-router-dom";
import { Context } from "./Context";
import useLogic from "./useLogic"

function App() {
  // Getting image and photos state to be passed to Info component
  const { images, query, photos, screenSize} = useContext(Context);
  // Getting pathname
  const { pathname } = useLocation();
  console.log(screenSize);

  return (
    <div className="app">
      <Header />
      {/* Dynamically rendering Search only on Home page */}
      {pathname === "/" && <Search />}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={`photos/${query}`}
          element={
            query ? (
              <Photos />
            ) : (
              <h4 style={{ textAlign: "center" }}>
                You entered no search term
              </h4>
            )
          }
        />
        <Route path={"cart"} element={<Cart />} />
        <Route
          path={":img_query"}
          element={<Info images={images} photos={photos} query={query} />}
        />
      </Routes>
      <h5 style={{ textAlign: "center" }}>
        Huge thanks to{" "}
        <a href="https://unsplash.com" target="_blank">
          Unsplash
        </a>{" "}
        for letting developers like me use their API
      </h5>
      <div>
        <a href="#header" className="top">
          ↑
        </a>
      </div>
    </div>
  );
}
// https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css
export default App;
