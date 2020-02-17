import React from 'react';
import "../css/style.css";


const OtherWebApps = (props) => {
  return (
    <div>
      <h2 className="heading-primary--other-title u-margin-top-tiny u-margin-bottom-tiny">{props.name}</h2>
      <p><i className={props.iconClass}></i></p>
      <h2 className="heading-primary--bio u-margin-top-tiny"><p>
        <a href={props.github} target="_blank" rel="noopener noreferrer" className="links">{props.glink}</a>
        {" "}|{" "}
        <a href={props.heroku} target="_blank" rel="noopener noreferrer" className="links">{props.hlink}</a>
      </p></h2>
      <h2 className="heading-primary--other-bio">{props.description}</h2>

    </div>



  )
}

export default OtherWebApps;

