import React from "react";

const About = () => {
  return (
    <div>
      <div className="container-about">
        <h1 className="about-title">About</h1>
        <div className="about-content">
          <div>
            <p className="items-about">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis hic corrupti libero ab! Nesciunt maiores nostrum optio
              quos impedit perspiciatis dicta, voluptate voluptates, labore ex
              dolor perferendis, sit modi veritatis.
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ratione perferendis esse eum nemo molestiae numquam omnis laboriosam
              cumque. Enim inventore labore, molestias provident distinctio veniam
              dolores eius nostrum error.
            </p>
          </div>

          <div className="items-image-about">
            <img
              src={require("../assets/image/office.jpg")}
              style={{ width: "100%", borderRadius: "20px" }}
              alt=""
            />
          </div>
        </div>

        <div className="box-about-vs">
          <div className="items-about-vs">
            <h5 className="sub-items-about-vs">Visi</h5>
            <p style={{ marginTop: "10px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At magnam
              nesciunt harum corrupti laudantium, impedit deleniti a incidunt
              praesentium ullam distinctio quibusdam consectetur esse accusantium
              delectus facilis, commodi voluptate quaerat.
            </p>
          </div>
          <div className="items-about-vs">
            <h5 className="sub-items-about-vs">Misi</h5>
            <p style={{ marginTop: "10px" }}>
              <span style={{ color: "#2146C7" }}>1. </span>Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nulla, corrupti! Laboriosam amet
              dolorum atque quisquam minus.
            </p>
            <br />
            <p>
              <span style={{ color: "#2146C7" }}>2. </span> Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Omnis sapiente ab dolores
              repellat expedita!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
