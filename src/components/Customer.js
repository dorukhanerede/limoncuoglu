import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
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
import Meta from "./Meta";
import SliderArea from "./SliderArea";

function Customer() {
  let location = useLocation();
  return (
    <div>
      <Header />
      <section
        className="animate__animated  animate__fadeInDown"
        style={{ display: location.pathname == "/" ? "" : "none" }}
      >
        <SliderArea />
      </section>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/News" component={News} />
        <Route exact path="/Team" component={Team} />
        <Route exact path="/WorkingAreas" component={WorkingAreas} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Customer;
