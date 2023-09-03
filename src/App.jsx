import React from "react";
import { Navbar, Cards, Home, Members } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </div>
  );
};

export default App;
