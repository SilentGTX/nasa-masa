import React from "react";
import logo from "../../assets/nasa-logo-2.png";

import "./Home.css";

const Home = () => (
  <div className="header section_padding" id="home">
    <div className="header_content">
      <h1 className="gradient__text">NASA's Astronomy Pic Of The Day & Earth View.</h1>
      <p>
        The best and most amazing SPA using NASA's APIs for Astronomy Picture of the Day for the
        current date and Earth Image for your current location + some extras like Earth v2.0 by EPIC
        API. Presented by Vankata.
      </p>
    </div>
    <div className="header_image">
      <img alt="" src={logo} />
    </div>
  </div>
);
export default Home;
