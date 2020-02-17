import React from 'react';
import "../css/style.css";


const AboutMe = () => {
  return (
    <div className="row u-margin-top-small">
      <div className="col-1-of-2 u-left-text bio u-margin-top-small">
        <h1 className="heading-primary--other u-margin-bottom-tiny">Born and raised in Houston, Texas</h1>
        <hr className="line"/>
        <p className="u-margin-top-tiny heading-primary--bio">My name is Hasanain Mohammed and I am a Full-Stack Web Developer. I'm also a UH Cougar, Houstonian, and a tech aficionado. As a freelancer, I love learning new technologies and creating projects. As I grow as a developer I want to travel, meet new people, and talk about how things code!</p>
      </div>
      <div className="col-1-of-2">
        <img src="./img/hasanain.png" className="mesize" alt="me"/>
      </div>
    </div>



  )
}

export default AboutMe;