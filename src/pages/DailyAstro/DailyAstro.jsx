import React, { useState, useEffect } from "react";
import "./DailyAstro.css";
import HttpClient from "../../HttpClient";

function DailyAstro() {
  const [apod, setApod] = useState({});

  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      setApod(apodData.data);
    });
  }, []);
  return (
    <div className="daily_astro section_padding" id="daily-astro">
      <div className="daily_astro_content">
        <h1 className="gradient__text">Daily Astronomy by NASA</h1>
        <div className="info-text">
          <p>Latest of NASA's</p>
          <p style={{ color: "white" }}>Astronomy Pictures Of The Day</p>
          {apod && (
            <article>
              <header>
                {apod.title} - <i>{apod.date}</i>
              </header>
              <img src={apod.url} alt="APOD" width="800" height="auto" />
              <p>{apod.explanation}</p>
              <pre
                style={{
                  overflowX: "auto",
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                }}
              >
                <hr />
                {JSON.stringify(apod, null, 2)}
              </pre>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}

export default DailyAstro;
