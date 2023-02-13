import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/nasa-logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="nasa-logo">
          <img alt="" src={logo}></img>
        </div>
        <div className="navbar_links">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#daily-astro">Daily Astronomy</a>
          </p>
          <p>
            <a href="#earth">Earth</a>
          </p>
          <p>
            <a href="#enhanced">Earth v2.0</a>
          </p>
        </div>
      </div>
      <div className="navbar_sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#daily-astro">Daily Astronomy</a>
              </p>
              <p>
                <a href="#earth">Earth</a>
              </p>
              <p>
                <a href="#enhanced">Earth v2.0</a>
              </p>
            </div>
            <div className="navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
