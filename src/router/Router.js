import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../page/About";
import Beranda from "../page/Beranda";
import Contact from "../page/Contact";
import Service from "../page/Service";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Router;
