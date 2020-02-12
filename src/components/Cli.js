import React from 'react';
import "../css/style.css";


const Cli = () => {
  return (
    <div className="grid">
      <figure className="effect-julia">
        <img src="./img/liribot.png" alt="liribot" />
        <figcaption>
          <h2 className="cli-name">LIRIBOT</h2>
          <div>
            <p>Language Interpretation & Recognition</p>
            <p>Interface • Node + Spotify + Axios </p>
            <br />
            <p>Click to view code</p>
          </div>
          <a target="blank" href="https://github.com/hasanainm/liri-node-app">Code</a>
        </figcaption>
      </figure>
      <figure className="effect-julia">
        <img src="./img/bamazon.png" alt="liribot" />
        <figcaption>
          <h2 className="cli-name">BAMAZON</h2>
          <div>
            <p>Language Interpretation & Recognition</p>
            <p>Interface • Node + Spotify + Axios </p>
            <br />
            <p>Click to view code</p>
          </div>
          <a target="blank" href="https://github.com/hasanainm/bamazon">Code</a>
        </figcaption>
      </figure>
    </div>
  )
}

export default Cli;