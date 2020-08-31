import React from "react";
import { NavLink, Link } from "react-router-dom";
import firebase from "firebase";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      öncelikliEmail: "",
      adres1: "",
      adres2: "",
      telNo: "",
    };
  }

  componentWillMount() {
    firebase
      .firestore()
      .collection("limoncuoglu")
      .doc("iletişim")
      .get()
      .then((snap) => {
        this.setState({
          öncelikliEmail: snap.data().öncelikliEmail,
          adres1: snap.data().adres1,
          adres2: snap.data().adres2,
          telNo: snap.data().telNo,
        });
      });
  }
  render() {
    let anasayfaNav,
      kurumsalNav,
      hakkımızdaNav,
      ekibimizNav,
      hizmetlerimizNav,
      bültenlerNav,
      iletişimNav;

    let sayfalarHeader, sonYazılarHeader, iletişimHeader;

    switch (this.props.language) {
      case "tr":
        anasayfaNav = "Anasayfa";
        kurumsalNav = "Kurumsal";
        hakkımızdaNav = "Hakkımızda";
        ekibimizNav = "Ekibimiz";
        hizmetlerimizNav = "Hizmetlerimiz";
        bültenlerNav = "Bültenler";
        iletişimNav = "İletişim";

        sayfalarHeader = "Sayfalar";
        sonYazılarHeader = "En Son Yazılarımız";
        iletişimHeader = "İletişim İçin";
        break;
      case "en":
        anasayfaNav = "Home";
        kurumsalNav = "Corporate";
        hakkımızdaNav = "About";
        ekibimizNav = "Team";
        hizmetlerimizNav = "Services";
        bültenlerNav = "News";
        iletişimNav = "Contact";

        sayfalarHeader = "Pages";
        sonYazılarHeader = "Latest Blogs";
        iletişimHeader = "Contact";
        break;
      case "fr":
        anasayfaNav = "Page d'accueil";
        kurumsalNav = "Enterprise";
        hakkımızdaNav = "à propos de nous";
        ekibimizNav = "notre équipe";
        hizmetlerimizNav = "Nos services";
        bültenlerNav = "newsletters";
        iletişimNav = "Contact";

        sayfalarHeader = "Sayfalar";
        sonYazılarHeader = "En Son Yazılarımız";
        iletişimHeader = "Contact";
        break;
    }

    return (
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="footer_widget">
                  <h3 className="footer_title">{sayfalarHeader}</h3>
                  <ul>
                    <li>
                      <NavLink exact to="/">
                        {anasayfaNav}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/Hakkımızda">
                        {hakkımızdaNav}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/Ekibimiz">
                        {ekibimizNav}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/Hizmetlerimiz">
                        {hizmetlerimizNav}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/Bültenler">
                        {bültenlerNav}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink exact to="/İletişim">
                        {iletişimNav}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="footer_widget">
                  <h3 className="footer_title">{iletişimHeader}</h3>
                  <p>
                    <a href="mailto:efelimoncuoglu@gmail.com">
                      {this.state.öncelikliEmail}
                    </a>{" "}
                    <br />
                    {this.state.telNo} <br />
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/Limoncuo%C4%9Flu+Hukuk+B%C3%BCrosu/@38.4300824,27.1359505,15z/data=!4m5!3m4!1s0x0:0x21ef66952e9149c4!8m2!3d38.4300824!4d27.1359505"
                    >
                      {this.state.adres1} <br /> {this.state.adres2}
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="footer_widget">
                  <div className="footer_logo">
                    <NavLink exact to="/">
                      <img src="img/limoncuoglu_logo.png" alt="" height="150" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right_text">
          <div className="container">
            <div className="footer_border" />
            <div className="row">
              <div className="col-xl-12">
                <p className="copy_right text-center">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
