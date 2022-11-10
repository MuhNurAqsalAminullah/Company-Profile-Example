import React from "react";

const ContactComp = () => {
  return (
    <div>
      <div className="container-box">
        <div className="box-question">
          <h1>
            Ada yang bisa <br /> dibantu?
          </h1>
        </div>
      </div>
      <div className="container-contact">
        <div className="box-contact-title">
          <h1 className="contact-title">Contact</h1>
        </div>

        <div className="container-box-contact">
          <div className="box-thanks">
            <h4 className="title-company">TectSpeed</h4>
            <h6 className="sub-thanks">
              Terima kasih sudah mampir! Jika kamu memiliki pertanyaan seputar
              TectSpeed, hubungi kami melalui kontak di laman ini.
            </h6>
          </div>

          <div className="box-contact">
            <div className="box-items-contact">
              <p className="items-contact">Alamat</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore, ipsa.
              </p>
            </div>
            <div className="box-items-contact">
              <p className="items-contact">Email</p>
              <p>Loremipsum@gmail.com</p>
            </div>
            <div className="box-items-contact">
              <p className="items-contact">No. Handphone</p>
              <p>08478123049</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
