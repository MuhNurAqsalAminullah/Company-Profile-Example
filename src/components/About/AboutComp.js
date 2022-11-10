import React from "react";

const AboutComp = () => {
  return (
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
            src={require("../../assets/image/office.jpg")}
            style={{ width: "100%", borderRadius: "20px" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
