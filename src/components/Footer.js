import React from "react";
import "../css/style.css";


const Footer = () => {
  return (
    <div>
      <footer className="footer">

        <a href="mailto:hasanainm0603@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope-square u-margin-top-small icons"></i></a>
        <a href="https://www.linkedin.com/in/hasanainmohammed/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin u-margin-top-small icons"></i></a>
        <a href="https://github.com/hasanainm" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square u-margin-top-small icons"></i></a>
        <p className="copyright u-margin-top-tiny">Copyright © Hasanain Mohammed 2020</p>

      </footer>
    </div>
  )
}

export default Footer;