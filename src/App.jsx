import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Page/Home";
import About from "./Page/About";
import Elab from "./Page/Elab";
import Sankofachatbot from "./Page/Sankofachatbot";
import Footer from "./Components/Footer";
import Contact from "./Page/Contact";


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Navbar */}
      <Navbar />
      <Sankofachatbot />

      {/* Page Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/elab" element={<Elab />} />
       
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
