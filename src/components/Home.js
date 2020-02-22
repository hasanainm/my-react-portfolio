import React, { Component } from 'react';
import { Link } from "react-scroll";
import "../css/style.css";


class Home extends Component {
  state = {}
  render() {
    return (
      <div className="main-bg">
        <header className="header">
          <div>
            <h1 className="heading-primary">
              <span className="heading-primary--main">Hasanain Mohammed</span>
              <span className="heading-primary--sub">Full-Stack Web Developer </span>
            </h1>
          </div>
          <Link activeClass="active" to="aboutme" spy={true} smooth={true} offset={0} duration={500} ><ul className="actions u-margin-top-small">
            <li><a href="#one" className="button scrolly btnnn btnnn--white btnnn--animated">Check me out</a></li>
          </ul></Link>

        </header>
      </div>
    )

  }
}

export default Home;

