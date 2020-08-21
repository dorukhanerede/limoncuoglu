import { Route, Switch, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Hakkımızda from "../pages/Hakkımızda";
import İletişim from "../pages/İletişim";
import Bültenler from "../pages/Bültenler";
import Ekibimiz from "../pages/Ekibimiz";
import Hizmetlerimiz from "../pages/Hizmetlerimiz";
import Header from "./Header";
import HeaderEN from "./HeaderEN";
import HeaderFR from "./HeaderFR";
import Footer from "./Footer";
import SliderArea from "./SliderArea";
import Anasayfa from "../pages/Anasayfa";
import CustomerEN from "../components/CustomerEN";
import AnasayfaEN from "../pages/en/Anasayfa";

function Customer() {
  let location = useLocation();
  let headerComponent;
  const [language, setLanguage] = useState("tr");

  function handleLanguageChange(newValue) {
    setLanguage(newValue);
  }

  switch (language) {
    case "tr":
      headerComponent = (
        <Header setLanguage={handleLanguageChange} language={language} />
      );
      // Header(language, handleLanguageChange);

      break;
    case "en":
      headerComponent = (
        <HeaderEN setLanguage={handleLanguageChange} language={language} />
      );
      break;
    case "fr":
      headerComponent = (
        <HeaderFR setLanguage={handleLanguageChange} language={language} />
      );
      break;
    default:
      headerComponent = (
        <Header setLanguage={handleLanguageChange} language={language} />
      );
  }

  return (
    <div>
      {/* <section style={{ display: language == "tr" ? "" : "none" }}>
        <Header setLanguage={setLanguage} language={language} />
      </section>
      <section style={{ display: language == "en" ? "" : "none" }}>
        <HeaderEN setLanguage={setLanguage} language={language} />
      </section>
      <section style={{ display: language == "fr" ? "" : "none" }}>
        <HeaderFR setLanguage={setLanguage} language={language} />
      </section> */}
      <Header setLanguage={handleLanguageChange} language={language} />
      {/* <section
        className="animate__animated  animate__fadeInDown"
        style={{ display: location.pathname == "/" ? "" : "none" }}
      >
        <SliderArea setLanguage={setLanguage} language={language} />
      </section> */}

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
