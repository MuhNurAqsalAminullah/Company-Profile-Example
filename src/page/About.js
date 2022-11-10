import React from "react";
// import AboutComp from "../components/About/AboutComp";
import AboutDetailComp from "../components/About/AboutDetailComp";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import NavbarFix from "../components/NavbarFix";

const About = () => {
  return (
    <div>
      <div>
        <NavbarFix />
        <AboutDetailComp />
      </div>
      <Footer />
    </div>
  );
};

export default About;
