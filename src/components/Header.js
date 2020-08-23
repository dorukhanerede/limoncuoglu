import React from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      submenuIsOn: false,
    };
  }

  changeLanguage = (language) => {
    this.props.setLanguage(language);
  };

  slickNavIsOn = () => {
    this.setState({ isOn: !this.state.isOn });
  };

  submenuHandleClick = (sub) => {
    if (sub || this.state.submenuIsOn)
      this.setState({ submenuIsOn: !this.state.submenuIsOn });
  };

  slickNavClosing = () => {
    let display = true;
    if (this.state.isOn) setInterval((display = false), 1000);
    return display;
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
                        <ul
                        // id="navigation"
                        >
                          <li>
                            <NavLink exact to="/" className="home-nav">
                              {anasayfaNav}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/Hakkımızda" className="about-nav">
                              {kurumsalNav} <i className="ti-angle-down" />
                            </NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink
                                  to="/Hakkımızda"
                                  className="about-sub-nav"
                                >
                                  {hakkımızdaNav}
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/Ekibimiz" className="team-nav">
                                  {ekibimizNav}
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink
                              to="/Hizmetlerimiz"
                              className="services-nav"
                            >
                              {hizmetlerimizNav}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/Bültenler" className="news-nav">
                              {bültenlerNav}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/İletişim" className="contact-nav">
                              {iletişimNav}
                            </NavLink>
                          </li>
                          <li>
                            <a
                              onClick={() => {
                                this.changeLanguage("tr");
                              }}
                            >
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
                  <div className="col-12 height-1">
                    <div className="mobile_menu d-block d-lg-none" />
                    <div className="slicknav_menu ">
                      <a
                        aria-haspopup="true"
                        role="button"
                        tabIndex="0"
                        className={
                          this.state.isOn
                            ? "slicknav_btn slicknav_open nav_dropdown"
                            : "slicknav_btn slicknav_collapsed nav_dropdown"
                        }
                        style={{ outline: "none" }}
                        onClick={() => {
                          this.slickNavIsOn();
                        }}
                      >
                        <span className="slicknav_menutxt">MENU</span>
                        <span className="slicknav_icon">
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                        </span>
                      </a>
                      <ul
                        className={
                          !this.state.isOn
                            ? "slicknav_nav slicknav_hidden animate__animated animate__fadeOutUp  animated faster"
                            : "slicknav_nav animate__animated animate__fadeInDown  animated faster"
                        }
                        aria-hidden={!this.state.isOn}
                        hidden={this.slickNavClosing()}
                        role="menu"
                        // style={{ display: !this.state.isOn ? "none" : "block" }}
                      >
                        <li>
                          <NavLink
                            className=""
                            exact
                            to="/"
                            role="menuitem"
                            tabIndex="-1"
                            onClick={() => {
                              this.slickNavIsOn();
                              this.submenuHandleClick();
                            }}
                          >
                            {anasayfaNav}
                          </NavLink>
                        </li>

                        <li className="slicknav_collapsed slicknav_parent">
                          <div
                            role="menuitem"
                            aria-haspopup="true"
                            tabIndex="-1"
                            className="slicknav_item slicknav_row"
                            style={{ outline: "none" }}
                            onClick={() => this.submenuHandleClick(true)}
                          >
                            <a
                              className="about-nav"
                              tabIndex="-1"
                              className={
                                window.location.pathname ==
                                  "/Hakk%C4%B1m%C4%B1zda" ||
                                window.location.pathname == "/Ekibimiz"
                                  ? " active"
                                  : ""
                              }
                            >
                              {kurumsalNav} <i className="ti-angle-down"></i>
                            </a>
                            <span className="slicknav_arrow">
                              {this.state.submenuIsOn ? "-" : "+"}
                            </span>
                          </div>
                          <ul
                            className={
                              this.state.submenuIsOn
                                ? " submenu slicknav_hidden animate__animated animate__fadeIn animated faster"
                                : " submenu slicknav_hidden animate__animated animate__fadeOut animated faster "
                            }
                            role="menu"
                            aria-hidden={!this.state.submenuIsOn}
                            hidden={!this.state.submenuIsOn}
                            // style={{
                            //   display: !this.state.submenuIsOn
                            //     ? "none"
                            //     : "block",
                            // }}
                          >
                            <li>
                              <NavLink
                                className="about-sub-nav"
                                to="/Hakkımızda"
                                role="menuitem"
                                tabIndex="-1"
                                onClick={() => {
                                  this.slickNavIsOn();
                                }}
                              >
                                {hakkımızdaNav}
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                className="team-nav"
                                to="/Ekibimiz"
                                role="menuitem"
                                tabIndex="-1"
                                onClick={() => {
                                  this.slickNavIsOn();
                                }}
                              >
                                {ekibimizNav}
                              </NavLink>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <NavLink
                            className="services-nav"
                            to="/Hizmetlerimiz"
                            role="menuitem"
                            tabIndex="-1"
                            onClick={() => {
                              this.slickNavIsOn();
                              this.submenuHandleClick();
                            }}
                          >
                            {hizmetlerimizNav}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="news-nav"
                            to="/Bültenler"
                            role="menuitem"
                            tabIndex="-1"
                            onClick={() => {
                              this.slickNavIsOn();
                              this.submenuHandleClick();
                            }}
                          >
                            {bültenlerNav}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="contact-nav"
                            to="/İletişim"
                            role="menuitem"
                            tabIndex="-1"
                            onClick={() => {
                              this.slickNavIsOn();
                              this.submenuHandleClick();
                            }}
                          >
                            {iletişimNav}
                          </NavLink>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              this.changeLanguage("tr");
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <img src="img/elements/tr.png" width="30"></img>
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              this.changeLanguage("en");
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <img src="img/elements/f3.jpg" width="30"></img>
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              this.changeLanguage("fr");
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <img src="img/elements/fr.png" width="30"></img>
                          </a>
                        </li>
                      </ul>
                    </div>
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
