import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";
import Hakkımızda from "../pages/Hakkımızda";
import İletişim from "../pages/İletişim";
import Bültenler from "../pages/Bültenler";
import Ekibimiz from "../pages/Ekibimiz";
import Hizmetlerimiz from "../pages/Hizmetlerimiz";
import logo from "../logo.svg";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";
import SliderArea from "./SliderArea";
import Anasayfa from "../pages/Anasayfa";

function Customer() {
  let location = useLocation();

  const [language, setLanguage] = useState("tr");

  return (
    <div>
      <Header setLanguage={setLanguage} language={language} />
      <section
        className="animate__animated  animate__fadeInDown"
        style={{ display: location.pathname == "/" ? "" : "none" }}
      >
        <SliderArea language={language} />
      </section>
      <Switch>
        <Route exact path="/" render={() => Anasayfa(language)} />
        <Route exact path="/Hakkımızda" render={() => Hakkımızda(language)} />
        <Route exact path="/İletişim" render={() => İletişim(language)} />
        <Route exact path="/Bültenler" render={() => Bültenler(language)} />
        <Route exact path="/Ekibimiz" render={() => Ekibimiz(language)} />
        <Route
          exact
          path="/Hizmetlerimiz"
          render={() => Hizmetlerimiz(language)}
        />
      </Switch>
      <Footer language={language} />
    </div>
  );
}

export default Customer;
