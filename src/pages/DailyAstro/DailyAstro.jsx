import React, { useState, useEffect } from "react";
import "./DailyAstro.css";
import axios from "axios";

function DailyAstro() {
  const [apod, setApod] = useState({});

  const API_KEY = "VYIrFGbi648qGCrmKM3173zD4tSYRGVz0aWmHaAM";
  const END_POINT = "https://api.nasa.gov/planetary/apod?api_key=";

  useEffect(() => {
    axios.get(END_POINT + API_KEY).then((apodData) => {
      setApod(apodData.data);
    });
  }, []);

  return (
    <div className="daily_astro section_padding" id="daily-astro">
      <div className="daily_astro_content">
        <h1 className="gradient__text">Daily Astronomy by NASA</h1>
        <div className="info-text">
          <p>Latest of NASA's</p>
          <p className="text-white">Astronomy Pictures Of The Day</p>
        </div>
        <div className="line"></div>

        <div className="image-wrapper">
          <p className="image-title text-white text-small">{apod.title}</p>
          <img src={apod.url} alt="" />
          <p className="image-by text-white text-small" style={{ textAlign: "end" }}>
            by {apod.copyright}
          </p>
        </div>
        <p className="image-explanation" style={{ fontSize: "15px" }}>
          {apod.explanation}
        </p>
      </div>
    </div>
  );
}

export default DailyAstro;
