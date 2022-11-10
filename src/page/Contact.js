import React from "react";
import ContactComp from "../components/ContactComp";
import Footer from "../components/Footer";
import NavbarFix from "../components/NavbarFix";

const Contact = () => {
  return (
    <div>
      <div>
        <NavbarFix />
        <ContactComp />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
