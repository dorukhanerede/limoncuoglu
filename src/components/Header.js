import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-area ">
          <div className="header-top_area d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-md-5 ">
                  <div className="header_left">
                    <p>Welcome to Limoncuoğlu Law</p>
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
          </div>
          <div id="sticky-header" className="main-header-area">
            <div className="container">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-2">
                    <div className="logo">
                      <a>
                        <img src="img/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a className="active">home</a>
                          </li>
                          <li>
                            <a>
                              pages <i className="ti-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a>case details</a>
                              </li>
                              <li>
                                <a>about</a>
                              </li>
                              <li>
                                <a>elements</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a>Services</a>
                          </li>
                          <li>
                            <a>Case study</a>
                          </li>
                          <li>
                            <a>
                              blog <i className="ti-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a>blog</a>
                              </li>
                              <li>
                                <a>single-blog</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a>Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="Appointment">
                      <div className="book_btn d-none d-lg-block">
                        <a>Get a Quote</a>
                      </div>
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
