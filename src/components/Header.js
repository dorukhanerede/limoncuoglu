import React from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  changeLanguage = (language) => {
    this.props.setLanguage(language);
  };

  render() {
    //vars
    let anasayfaNav;
    let kurumsalNav;
    let hakkımızdaNav;
    let ekibimizNav;
    let hizmetlerimizNav;
    let bültenlerNav;
    let iletişimNav;

    switch (this.props.language) {
      case "tr":
        anasayfaNav = "anasayfa";
        kurumsalNav = "kurumsal";
        hakkımızdaNav = "hakkımızda";
        ekibimizNav = "ekibimiz";
        hizmetlerimizNav = "hizmetlerimiz";
        bültenlerNav = "bültenler";
        iletişimNav = "iletişim";
        break;
      case "en":
        anasayfaNav = "Home";
        kurumsalNav = "Corporate";
        hakkımızdaNav = "About";
        ekibimizNav = "Team";
        hizmetlerimizNav = "services";
        bültenlerNav = "News";
        iletişimNav = "contact";
        break;
      case "fr":
        anasayfaNav = "Page d'accueil";
        kurumsalNav = "Enterprise";
        hakkımızdaNav = "à propos de nous";
        ekibimizNav = "notre équipe";
        hizmetlerimizNav = "Nos services";
        bültenlerNav = "newsletters";
        iletişimNav = "Contact";
        break;
      default:
        anasayfaNav = "anasayfa";
        kurumsalNav = "kurumsal";
        hakkımızdaNav = "hakkımızda";
        ekibimizNav = "ekibimiz";
        hizmetlerimizNav = "hizmetlerimiz";
        bültenlerNav = "bültenler";
        iletişimNav = "iletişim";
    }

    return (
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area">
            <div className="container">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-3">
                    <div className="logo">
                      <Link
                        to={{
                          pathname: "/",
                          state: {
                            from: "root",
                          },
                        }}
                      >
                        <img
                          src="img/limoncuoglu_logo_row_white.png"
                          alt=""
                          height="39"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-9">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <NavLink exact to="/">
                              {anasayfaNav}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/Hakkımızda">
                              {kurumsalNav} <i className="ti-angle-down" />
                            </NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/Hakkımızda">
                                  {hakkımızdaNav}
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/Ekibimiz">{ekibimizNav}</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/Hizmetlerimiz">
                              {hizmetlerimizNav}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/Bültenler">{bültenlerNav}</NavLink>
                          </li>
                          <li>
                            <NavLink to="/İletişim">{iletişimNav}</NavLink>
                          </li>
                          <li className="change-language">
                            <a
                              onClick={() => {
                                this.changeLanguage("tr");
                              }}
                            >
                              <img src="img/elements/tr.png" width="30"></img>
                            </a>
                          </li>
                          <li className="change-language">
                            <a onClick={() => this.changeLanguage("en")}>
                              <img src="img/elements/f3.jpg" width="30"></img>
                            </a>
                          </li>
                          <li className="change-language">
                            <a onClick={() => this.changeLanguage("fr")}>
                              <img src="img/elements/fr.png" width="30"></img>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
