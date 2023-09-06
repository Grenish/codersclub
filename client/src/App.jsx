import React from "react";
import {
  Navbar,
  Home,
  Members,
  About,
  Blogs,
  BlogArticle,
  Contact,
  Articles,
} from "./components";
import { Routes, Route, useLocation } from "react-router-dom";
import { AdminLogin, Dashboard } from "./auth";

const App = () => {
  const location = useLocation();

  const renderMainContent = () => {
    if (location.pathname === "/admin") {
      return <AdminLogin />;
    } else {
      return (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/article/:id" element={<BlogArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      );
    }
  };

  return <div className="App">{renderMainContent()}</div>;
};

export default App;
