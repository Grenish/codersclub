import React from "react";
import {
  Navbar,
  Home,
  Members,
  About,
  Blogs,
  BlogArticle, // Remember to import BlogArticle
} from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/article/:id" element={<BlogArticle />} />
      </Routes>
    </div>
  );
};

export default App;
