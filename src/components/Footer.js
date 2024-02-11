import React from "react";
import * as BsIcont from "react-icons/bs";
import * as AiIcont from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#122a8071" }}>
      <div className="container-footer">
        <h3 className="footer-title">TechSpeed</h3>

        <div>
          <ul className="box-nav-footer">
            <li className="nav-footer">
              <Link to={"/"}>Beranda</Link>
            </li>
            <li className="nav-footer">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="nav-footer">
              <Link to={"/service"}>Service</Link>
            </li>
            <li className="nav-footer">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>

          <div className="box-icont-footer">
            <div className="item-icont-footer">
              <BsIcont.BsFacebook size={30} />
            </div>
            <div className="item-icont-footer">
              <AiIcont.AiFillInstagram size={30} />
            </div>
            <div className="item-icont-footer">
              <AiIcont.AiFillTwitterCircle size={30} />
            </div>
            <div className="item-icont-footer">
              <AiIcont.AiFillYoutube size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="tag-footer">
        <p>
          Dibuat oleh Muh Nur Aqsal Aminullah menggunakan ReactJS
        </p>
      </div>
    </div>
  );
};

export default Footer;
