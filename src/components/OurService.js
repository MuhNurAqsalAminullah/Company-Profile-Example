import React from "react";

const OurService = () => {
  return (
    <div className="container-service">
      <div className="box-title-service">
        <h1 className="service-title">Service</h1>
      </div>
      <div className="box-card-service">
        <div className="card-sevice">
          <div>
            <img
              src={require("../assets/icon/seo.webp")}
              width={"50px"}
              alt=""
            />
          </div>
          <div className="items-service">
            <h5 className="items-sub-service-title">SEO</h5>
            <p style={{ textAlign: "center", lineHeight: "24px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              non error maiores corrupti. Animi dolorem molestias dicta sit,
              mollitia velit!
            </p>
          </div>
        </div>
        <div className="card-sevice">
          <div>
            <img
              src={require("../assets/icon/sosial-media.png")}
              width={"50px"}
              alt=""
            />
          </div>
          <div className="items-service">
            <h5 className="items-sub-service-title">Sosial Media Management</h5>
            <p style={{ textAlign: "center", lineHeight: "24px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              non error maiores corrupti. Animi dolorem molestias dicta sit,
              mollitia velit!
            </p>
          </div>
        </div>
        <div className="card-sevice">
          <div>
            <img
              src={require("../assets/icon/web-development.png")}
              width={"50px"}
              alt=""
            />
          </div>
          <div className="items-service">
            <h5 className="items-sub-service-title">Web Development</h5>
            <p style={{ textAlign: "center", lineHeight: "24px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              non error maiores corrupti. Animi dolorem molestias dicta sit,
              mollitia velit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
