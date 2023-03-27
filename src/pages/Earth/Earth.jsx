import React, { useState, useEffect } from "react";
import "./Earth.css";
import axios from "axios";

function Earth() {
  const [earthImage, setEarthImage] = useState({});

  const API_KEY = "VYIrFGbi648qGCrmKM3173zD4tSYRGVz0aWmHaAM";
  const END_POINT =
    "https://api.nasa.gov/planetary/earth/assets?lat=45.0&lon=-75.0&date=2022-01-01&dim=0.15&api_key=YOUR_API_KEY";

  useEffect(() => {
    axios.get(END_POINT + API_KEY).then((earth) => {
      setEarthImage(earth.config.url);
      console.log(earth);
    });
  }, []);

  return (
    <div className="earth section_padding" id="earth">
      <div className="earth_content">
        <h1 className="gradient__text">Earth API</h1>
        <div className="info-text">
          <p>Landsat imagery for</p>
          <p className="text-white">your location</p>
        </div>
        <div className="earth_image">
          <img src={earthImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Earth;
