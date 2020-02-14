import React from 'react';
import "../css/style.css";
import Cli from "./Cli";
const CliGrid = () => {
  return (
    <div>
    <section className="cli-bg">
      <div className="row">
        <h1 className="heading-primary--cli u-padding-top-tiny">CLI Projects</h1>
        <Cli />
      </div>
    </section>
    </div>
  )
}

export default CliGrid;