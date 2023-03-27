import React from "react";
import { Navbar } from "./components";
import { Home, DailyAstro, Earth } from "./pages";
import "./App.css";
const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Home />
      <DailyAstro />
      <Earth />
    </div>
  </div>
);

export default App;
