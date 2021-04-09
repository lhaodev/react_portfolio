import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./App.css";

class App extends Component {
  //document.title = "Lu Hao Portfolio";
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>



          {/* <About />
          <div id="portfolioLink"></div>
          <Portfolio />
          <Contact /> */}
          <Footer />
        </div >
      </Router>
    );
  }
}

export default App;