import React from "react";
import "../css/style.css";


const Projects = () => {
  return (
    <div>
      <section className="projects-bg u-margin-top-small">
        <h1 className="heading-primary--project">Project</h1>
        <div className="row u-margin-top-tiny">
          <div className="col-1-of-2">
            <h1 className="heading-primary--project-title u-margin-top-small">Portfolio Builder</h1>
            <br />
            <h2 className="heading-primary--bio">This web-based application allows users to build portfolio by simply entering their information. Users are given templates to choose from and are able to share the URL with their employers, colleagues, friends, and more!</h2>
            <br />
            <h2 className="heading-primary--bio-tech">Handlebars • Bootstrap • jQuery • Node.js • Express • MySQL • Sequelize • JAWSDB • Firebase Auth • Heroku</h2>
            <br />
            <h2 className="heading-primary--bio"><p>
              <a href="https://github.com/hasanainm/GoHam-portfolio-builder" target="_blank" rel="noopener noreferrer" className="links">View Code</a>
              {" "}|{" "}
              <a href="https://goham-portfolio-builder.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="links">View App</a>
            </p></h2>
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