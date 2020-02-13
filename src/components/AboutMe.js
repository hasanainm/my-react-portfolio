import React from 'react';
import "../css/style.css";


const AboutMe = () => {
  return (
    <div className="row u-margin-top-big">
      <div className="col-1-of-2 u-left-text bio">
        <h1 className="heading-primary--other u-margin-bottom-tiny">Born and raised in Houston, Texas</h1>
        <hr className="line"/>
        <p className="u-margin-top-tiny heading-primary--bio">My name is Hasanain Mohammed and I am a Full-Stack Web Developer. I'm also a UH Cougar, Houstonian, and a tech-enthusiast. With a background in MIS, I'm interested in solving business probelems with technologies. As the tech industry continues to grow, I'm constantly asking myself what new technologies are emerging and how can we utilize them to improve business processes. This has inspired and emboldened me to learn and implement various concepts of software and web development.</p>
      </div>
      <div className="col-1-of-2">
        <img src="/img/hasanain.png" className="mesize" alt="me"/>
      </div>
    </div>



  )
}

export default AboutMe;