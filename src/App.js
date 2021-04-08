import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

class App extends Component {
  //document.title = "Lu Hao Portfolio";
  render() {
    return (
      <div>
        <Header />
        <About />
        <div id="portfolioLink"></div>
        <Portfolio />
        <Contact />
        <Footer />
      </div >
    );
  }
}

export default App;