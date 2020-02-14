import React, { Component } from 'react';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import CliGrid from './components/CliGrid';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
      <Home />
      <AboutMe />
      <Skills/>
      <CliGrid />
      <Projects/>
      <Footer />
      </div>
    );
  }
}

export default App;
