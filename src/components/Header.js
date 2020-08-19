import React from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
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
                      <a>
                        <i className="fa fa-linkedin" />
                      </a>
                      <a>
                        <i className="fa fa-facebook" />
                      </a>
                      <a>
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
                          // style={{
                          //   marginTop: "-18.45px",
                          //   marginBottom: "-18.45px"
                          // }}
                        />
                        {/* <img
                          src="img/limoncuoglu_logo_yazi_white.png"
                          alt=""
                          height="39"
                          style={{ marginLeft: "4px" }}
                        /> */}
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <NavLink exact to="/">
                              anasayfa
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/About">
                              kurumsal <i className="ti-angle-down" />
                            </NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/About">hakkımızda</NavLink>
                              </li>
                              <li>
                                <NavLink to="/Team">ekibimiz</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/WorkingAreas">hizmetlerimiz</NavLink>
                          </li>
                          <li>
                            <NavLink to="/News">bültenler</NavLink>
                          </li>
                          <li>
                            <NavLink to="/Contact">iletişim</NavLink>
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
