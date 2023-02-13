import React from "react";
import { Navbar } from "./components";
import { Home, DailyAstro } from "./pages";
import "./App.css";
const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Home />
      <DailyAstro />
    </div>
  </div>
);

export default App;
