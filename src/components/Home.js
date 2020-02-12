import React from 'react';
import "../css/style.css";


const Home = () => {
  return (
    <div className="main-bg">
      <header className="header">
        <div>
          <h1 className="heading-primary">
            <span className="heading-primary--main">Hasanain Mohammed</span>
            <span className="heading-primary--sub">Full-Stack Web Developer </span>
          </h1>
        </div>
        <ul className="actions u-margin-top-small">
          <li><a href="#one" className="button scrolly btn btn--white btn--animated">Check me out</a></li>
        </ul>
      </header>
    </div>
  )
}

export default Home;