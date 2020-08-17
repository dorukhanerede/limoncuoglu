import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import News from "../pages/News";
import Team from "../pages/Team";
import WorkingAreas from "../pages/WorkingAreas";
import logo from "../logo.svg";
import Header from "./Header";
import Footer from "./Footer";

class Customer extends Component {
  render() {
    return (
      <div>
        {/* <Meta /> */}
        {/* <Header /> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        {/* <SliderArea />
        <ServiceArea /> */}
        <Router>
          <div>
            {/* <div className="container mainContent"> */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/News" component={News} />
                <Route exact path="/Team" component={Team} />
                <Route exact path="/WorkingAreas" component={WorkingAreas} />
              </Switch>
            {/* </div> */}
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default Customer;
