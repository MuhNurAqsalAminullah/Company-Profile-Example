import React from "react";

// Import React Router Dom
import { Route, Routes } from "react-router-dom";

// Import Page
import Layout from "../layout";
import Beranda from "../page/Beranda";
import About from "../page/About";
import Service from "../page/Service";
import Contact from "../page/Contact";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Beranda />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
