import React from "react";
import "../css/style.css";


const Projects = () => {
  return (
    <div>
      <section className="projects-bg">
        <h1 className="heading-primary--project">Projects</h1>
        <div className="row u-margin-top-tiny">
          <div className="col-1-of-2">
            <h5>Portfolio Builder</h5>
           
          </div>
          <div className="col-1-of-2">
            <iframe title="myFrame" width="560" height="315" src="https://www.youtube.com/embed/D_7pMAuzB48" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects;