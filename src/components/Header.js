import React from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  changeLanguage(language) {
    this.props.setLanguage(language);
  }

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
    }

    return (
      <header>
        <div className="header-area ">
          {/* <div className="header-top_area d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-md-5 ">
                  <div className="header_left">
                    <p>Limoncuoğlu Hukuk Bürosuna Hoşgeldiniz</p>
                  </div>
                </div>
                <div className="col-xl-7 col-md-7">
                  <div className="header_right d-flex">
                    <div className="short_contact_list">
                      <ul>
                        <li>
                          <a>
                            {" "}
                            <i className="fa fa-envelope" /> info@docmed.com
                          </a>
                        </li>
                        <li>
                          <a>
                            {" "}
                            <i className="fa fa-phone" /> 1601-609 6780
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="social_media_links">
                      <a onClick={() => this.props.lang("tr")}>
                        <i className="fa fa-linkedin" />
                      </a>
                      <a onClick={() => this.props.lang("en")}>
                        <i className="fa fa-facebook" />
                      </a>
                      <a onClick={() => this.props.lang("fr")}>
                        <i className="fa fa-google-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div id="sticky-header" className="main-header-area">
            <div className="container">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-4">
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
                  <div className="col-xl-8 col-lg-8">
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
                          <li>
                            <a onClick={() => this.changeLanguage("tr")}>
                              <img src="img/elements/tr.png" width="30"></img>
                            </a>
                          </li>
                          <li>
                            <a onClick={() => this.changeLanguage("en")}>
                              <img src="img/elements/f3.jpg" width="30"></img>
                            </a>
                          </li>
                          <li>
                            <a onClick={() => this.changeLanguage("fr")}>
                              <img src="img/elements/fr.png" width="30"></img>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="Appointment">
                      <div className="book_btn d-none d-lg-block">
                        <a>Get a Quote</a>
                      </div>
                    </div>
                  </div> */}
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
