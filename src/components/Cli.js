import React from 'react';
import "../css/style.css";

const Cli = () => {
  return (
    <div className="row">
    <div className="col-1-of-2">
      <figure className="effect-julia">
        <img src="./img/liribot.png" alt="liribot" />
        <figcaption>
          <h2 className="cli-name">LIRIBOT</h2>
          <div>
            <p>Language Interpretation & Recognition</p>
            <p>Interface • Node • Spotify • Axios </p>
            <br />
            <p>Click to view code</p>
          </div>
          <a target="blank" href="https://github.com/hasanainm/liri-node-app">Code</a>
        </figcaption>
      </figure>
      </div>
      <div className="col-1-of-2">
      <figure className="effect-julia">
        <img src="./img/bamazon.png" alt="liribot" />
        <figcaption>
          <h2 className="cli-name">BAMAZON</h2>
          <div>
            <p>Amazon as a CLI App</p>
            <br/>
            <p>Node • Inquirer NPM Package • MySQL </p>
            <br />
            <p>Click to view code</p>
          </div>
          <a target="blank" href="https://github.com/hasanainm/bamazon">Code</a>
        </figcaption>
      </figure>
    </div>
    </div>
  )
}

export default Cli;