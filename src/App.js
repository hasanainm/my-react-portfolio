import React, { Component } from 'react';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import CliGrid from './components/CliGrid';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import OtherWebApps from './components/OtherWebApps';
import "../src/css/style.css";

class App extends Component {
  render() {
    return (
      <div>
      <Home />
      <AboutMe />
      <Skills/>
      <CliGrid />
      <Projects/>
      <section className="webApps-list u-padding-bottom-small u-padding-top-tiny u-margin-top-tiny">
      <h1 className="heading-primary--webApps">Other Web-Apps</h1>
      <div className="row">
      <div className="col-1-of-4">
      <OtherWebApps iconClass ="fas fa-dollar-sign icons" github ="https://github.com/hasanainm/budgetApp" heroku ="https://hasanainm.github.io/budgetApp/" name={"Budget App"} glink={"View Code"} hlink={"View App"}></OtherWebApps>
      </div>
      <div className="col-1-of-4">
      <OtherWebApps iconClass ="fas fa-hand-pointer icons" github ="https://github.com/hasanainm/clicky-game" heroku ="https://marvel-clicky.herokuapp.com/" name={"Clicky Game"} glink={"View Code"} hlink={"View App"}></OtherWebApps>
      </div>
      <div className="col-1-of-4">
      <OtherWebApps iconClass ="fas fa-train icons" github ="https://github.com/hasanainm/Train-Scheduler" heroku ="https://hasanainm.github.io/Train-Scheduler/" name={"Train Scheduler"} glink={"View Code"} hlink={"View App"}></OtherWebApps>
      </div>
      <div className="col-1-of-4">
      <OtherWebApps iconClass ="fas fa-image icons" github ="https://github.com/hasanainm/GifTastic" heroku ="https://hasanainm.github.io/GifTastic/" name={"Giphy Api"} glink={"View Code"} hlink={"View App"}></OtherWebApps>
      </div>
    </div>
      </section>
      <Footer />
      </div>
    );
  }
}

export default App;

