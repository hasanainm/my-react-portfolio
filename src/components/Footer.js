import React from "react";
import "../css/style.css";
import Modal from "./Modal";


const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <Modal />
        <section className="contact color-purple u-padding-top-tiny">
          <div className="section-gap" style={{ display: "none" }}></div>
          <div className="contact-content container">

            <div className="contact-col /col s12 l4 pull-l4">
              <div className="contact-button center-align">
                <button className="bttn bttn-big bblack">
                  <div className="color-black"></div>
                  Send a Message
						    </button>
              </div>
            </div>
          </div>
        </section>
        <br />
        <a href="https://www.linkedin.com/in/hasanainmohammed/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin u-margin-top-small icons"></i></a> {" "}
        <a href="https://github.com/hasanainm" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square u-margin-top-small icons"></i></a>
        <p className="copyright u-margin-top-tiny">Copyright © Hasanain Mohammed 2020</p>
      </footer>
    </div>
  )
}

export default Footer;