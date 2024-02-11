import React from "react";

const Beranda = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="container-hero">
        <div className="hero-banner">
          <div className="hero-content">
            <h1 className="hero-title">TechSpeed</h1>
            <p className="hero-subtitle">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
              adipisci officiis a ipsa, facilis odit ut cumque minima suscipit.
            </p>
          </div>
        </div>
      </div>

      {/* About */}
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
      </div>

      {/* Our Service */}
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

      {/* Client */}
      <div className="container-client">
        <div className="box-title-client">
          <h1 className="client-title">Client</h1>
        </div>

        <div className="box-sub-title-client">
          <h6 className="client-sub-title">Testimoni</h6>
          <p style={{ textAlign: "center", fontFamily: "Montserrat" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
            tempora?
          </p>
        </div>

        <div className="box-card-client">
          <div className="card-client">
            <img
              className="client-image"
              src={require("../assets/client/client1.jpg")}
              width={"100px"}
              alt=""
            />
            <div className="box-content-client">
              <p className="name-client" style={{ fontWeight: "bold" }}>
                Harlem Jonshon
              </p>
              <p className="item-content-client">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
                laborum accusamus facere ipsum eos eveniet doloremque nesciunt,
                quam sit! In?
              </p>
            </div>
          </div>
          <div className="card-client">
            <img
              className="client-image"
              src={require("../assets/client/client2.jpg")}
              width={"100px"}
              alt=""
            />
            <div className="box-content-client">
              <p className="name-client" style={{ fontWeight: "bold" }}>
                Jesica Strome
              </p>
              <p className="item-content-client">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
                laborum accusamus facere ipsum eos eveniet doloremque nesciunt,
                quam sit! In?
              </p>
            </div>
          </div>
          <div className="card-client">
            <img
              className="client-image"
              src={require("../assets/client/client3.jpg")}
              width={"100px"}
              alt=""
            />
            <div className="box-content-client">
              <p className="name-client" style={{ fontWeight: "bold" }}>
                Charli Krimson
              </p>
              <p className="item-content-client">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
                laborum accusamus facere ipsum eos eveniet doloremque nesciunt,
                quam sit! In?
              </p>
            </div>
          </div>
          <div className="card-client">
            <img
              className="client-image"
              src={require("../assets/client/client4.jpg")}
              width={"100px"}
              alt=""
            />
            <div className="box-content-client">
              <p className="name-client" style={{ fontWeight: "bold" }}>
                Boby Skarr
              </p>
              <p className="item-content-client">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
                laborum accusamus facere ipsum eos eveniet doloremque nesciunt,
                quam sit! In?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
