import React from "react";

const Client = () => {
  return (
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
  );
};

export default Client;
