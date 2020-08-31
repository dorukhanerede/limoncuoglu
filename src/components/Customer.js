import { Route, Switch, useLocation, useParams } from "react-router-dom";
import React, { useState } from "react";
import Hakkımızda from "../pages/Hakkımızda";
import İletişim from "../pages/İletişim";
import Bültenler from "../pages/Bültenler";
import Ekibimiz from "../pages/Ekibimiz";
import Hizmetlerimiz from "../pages/Hizmetlerimiz";
import Header from "./Header";
import Footer from "./Footer";
import SliderArea from "./SliderArea";
import Anasayfa from "../pages/Anasayfa";
import Admin from "../admin-panel/Admin";
import Login from "../admin-panel/Login";
import PageNotFound from "./PageNotFound";

function Customer() {
  const location = useLocation();
  const [language, setLanguage] = useState("tr");

  let pathname = location.pathname.toLowerCase();
  return (
    <div>
      <section
        style={{
          display: pathname != "/admin" && pathname != "/login" ? "" : "none",
        }}
      >
        <Header setLanguage={setLanguage} language={language} />
      </section>

      <section
        className="animate__animated  animate__fadeInDown"
        style={{ display: location.pathname == "/" ? "" : "none" }}
      >
        <SliderArea language={language} />
      </section>
      <Switch>
        <Route exact path="/" render={() => Anasayfa(language)} />
        <Route
          exact
          path="/Hakkımızda"
          render={() => <Hakkımızda language={language} />}
        />
        <Route
          exact
          path="/İletişim"
          render={() => <İletişim language={language} />}
        />
        <Route
          exact
          path="/Bültenler"
          render={() => <Bültenler language={language} />}
        />
        <Route exact path="/Ekibimiz" render={() => Ekibimiz(language)} />
        <Route
          exact
          path="/Hizmetlerimiz"
          render={() => Hizmetlerimiz(language)}
        />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/Login" component={Login} />
      </Switch>
      <section
        style={{
          display: pathname != "/admin" && pathname != "/login" ? "" : "none",
        }}
      >
        <Footer language={language} />
      </section>
    </div>
  );
}

export default Customer;
