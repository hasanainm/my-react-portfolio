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
      <section className="webApps-list u-padding-bottom-tiny u-padding-top-tiny u-margin-top-tiny">
      <h1 className="heading-primary--webApps">Other Web-Apps</h1>
      <div class="row">
      <div class="col-1-of-4">
      <OtherWebApps iconClass ="fas fa-dollar-sign icons" github ="https://github.com/hasanainm/GoHam-portfolio-builder" heroku ="https://goham-portfolio-builder.herokuapp.com/" name={"Budget App"} glink={"View Code"} hlink={"View App"} description={"cool app"}></OtherWebApps>
      </div>
      <div class="col-1-of-4">
      <OtherWebApps iconClass ="fas fa-dollar-sign icons" github ="https://github.com/hasanainm/GoHam-portfolio-builder" heroku ="https://goham-portfolio-builder.herokuapp.com/" name={"Budget App"} glink={"View Code"} hlink={"View App"} description={"cool app"}></OtherWebApps>
      </div>
      <div class="col-1-of-4">
      <OtherWebApps iconClass ="fas fa-dollar-sign icons" github ="https://github.com/hasanainm/GoHam-portfolio-builder" heroku ="https://goham-portfolio-builder.herokuapp.com/" name={"Budget App"} glink={"View Code"} hlink={"View App"} description={"cool app"}></OtherWebApps>
      </div>
      <div class="col-1-of-4">
      <OtherWebApps iconClass ="fas fa-dollar-sign icons" github ="https://github.com/hasanainm/GoHam-portfolio-builder" heroku ="https://goham-portfolio-builder.herokuapp.com/" name={"Budget App"} glink={"View Code"} hlink={"View App"} description={"cool app"}></OtherWebApps>
      </div>
    </div>
      </section>
    
      <Footer />
      </div>
    );
  }
}

export default App;

