import React from "react";
import AboutComp from "../components/About/AboutComp";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import OurService from "../components/OurService";
import Client from "../components/Client";
import Footer from "../components/Footer";

const Beranda = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <AboutComp />
      <OurService />
      <Client />
      <Footer />
    </div>
  );
};

export default Beranda;
