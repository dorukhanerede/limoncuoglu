import { Route, Switch, useLocation } from "react-router-dom";
import React, { useState } from "react";
import HakkımızdaEN from "../pages/en/Hakkımızda";
import İletişimEN from "../pages/en/İletişim";
import BültenlerEN from "../pages/en/Bültenler";
import EkibimizEN from "../pages/en/Ekibimiz";
import HizmetlerimizEN from "../pages/en/Hizmetlerimiz";
import Header from "./Header";
import HeaderEN from "./HeaderEN";
import Footer from "./Footer";
import SliderArea from "./SliderArea";
import AnasayfaEN from "../pages/en/Anasayfa";

function CustomerEN() {
  let location = useLocation();
  let headerComponent;
  const [language, setLanguage] = useState("en");

  function handleLanguageChange(newValue) {
    setLanguage(newValue);
  }

  return (
    <div>
      <HeaderEN setLanguage={setLanguage} language={language} />

      <section
        className="animate__animated  animate__fadeInDown"
        style={{ display: location.pathname == "/en" ? "" : "none" }}
      >
        <SliderArea setLanguage={setLanguage} language={language} />
      </section>
      <Switch>
        <Route exact path="/en" render={() => AnasayfaEN(language)} />
        <Route
          exact
          path="/en/Hakkımızda"
          render={() => HakkımızdaEN(language)}
        />
        <Route exact path="/en/İletişim" render={() => İletişimEN(language)} />
        <Route
          exact
          path="/en/Bültenler"
          render={() => BültenlerEN(language)}
        />
        <Route exact path="/en/Ekibimiz" render={() => EkibimizEN(language)} />
        <Route
          exact
          path="/Hizmetlerimiz"
          render={() => HizmetlerimizEN(language)}
        />
      </Switch>
      <Footer language={language} />
    </div>
  );
}

export default CustomerEN;
