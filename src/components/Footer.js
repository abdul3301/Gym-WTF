import React from "react";
import "./Footer.css";
import wtfFooter from "../assets/footer-wtf.PNG";
import footerLocation from "../assets/footerLocation.PNG";
import phone from "../assets/phone.PNG";
import mail from "../assets/mail.PNG";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo" style={{ marginTop: "40px" }}>
        <img className="footerLogoImage" src={wtfFooter} alt="logo" />
      </div>
      <div className="quickLinks">
        <h3>
          <strong>Quick Links</strong>
        </h3>
        <br />
        <p>About</p>
        <p>FAQs</p>
        <p>Privacy Policy</p>
        <p>WTF in News</p>
        <p>Terms & Conditions</p>
        <p>Return & Cancellation</p>
      </div>
      <div className="explore">
        <h3>
          <strong>Explore</strong>
        </h3>
        <br />
        <p>Arenas</p>
        <p>Studios</p>
        <p>Nutrition</p>
      </div>
      <div className="contact">
        <h2>
          <strong>Contact</strong>
        </h2>
        <section style={{ display: "flex" }}>
          <p>
            <img
              src={footerLocation}
              style={{ height: "30px", marginRight: "20px" }}
            />
          </p>
          <p>
            Ro: S 1502, Amrapali <br />
            Silicon city, sector 76, <br />
            Noida, Uttar Pradesh, India
          </p>
        </section>
        <br />
        <section style={{ display: "flex" }}>
          <p>
            <img
              src={footerLocation}
              alt=""
              style={{ height: "30px", marginRight: "20px" }}
            />
          </p>
          <p>
            Ho: C-86 B,Ground Floor, <br />
            Sector 8, Noida, Uttar <br />
            Pradesh, India
          </p>
        </section>
        <br />
        <section style={{ display: "flex" }}>
          <p>
            <img
              src={phone}
              alt=""
              style={{ height: "25px", marginRight: "20px" }}
            />
          </p>
          <p>+919090639005</p>
        </section>
        <br />
        <section style={{ display: "flex" }}>
          <p>
            <img
              src={mail}
              alt=""
              style={{ height: "20px", marginRight: "20px" }}
            />
          </p>
          <p>support@wtfup.me</p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
