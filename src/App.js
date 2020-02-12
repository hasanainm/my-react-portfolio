import React, { Component } from 'react';
import Fade from "react-reveal/Fade";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import CliGrid from './components/CliGrid';

class App extends Component {
  render() {
    return (
      <Fade delay={500}>

        <Home />
        <AboutMe />
        <CliGrid />

      </Fade>
    );
  }
}

export default App;
