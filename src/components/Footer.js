import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <div className="footer_logo">
                    <a href="#">
                      <img
                        src="img/limoncuoglu_logo_2.png"
                        alt=""
                        height="60"
                        style={{ marginRight: "3px" }}
                      />
                      <img
                        src="img/limoncuoglu_logo_yazi.png"
                        alt=""
                        height="60"
                      />
                    </a>
                  </div>
                  <p>
                    <a href="#">conbusi@support.com</a> <br />
                    +90 232 464 00 54 <br />
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/Limoncuo%C4%9Flu+Hukuk+B%C3%BCrosu/@38.4300824,27.1359505,15z/data=!4m5!3m4!1s0x0:0x21ef66952e9149c4!8m2!3d38.4300824!4d27.1359505"
                    >
                      1378 Sokak, No: 4/1, Kat 3/308, <br /> Alsancak - Izmir,
                      35210
                    </a>
                  </p>
                  <div className="socail_links">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Çalışma Alanları</h3>
                  <ul>
                    <li>
                      <a href="#">Marketing &amp; SEO</a>
                    </li>
                    <li>
                      <a href="#"> Startup</a>
                    </li>
                    <li>
                      <a href="#">Finance solution</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Travel</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title">En son yazılarımız</h3>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#"> Contact</a>
                    </li>
                    <li>
                      <a href="#">Appointment</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="footer_widget">
                  <h3 className="footer_title">Subscribe</h3>
                  <form action="#" className="newsletter_form">
                    <input type="text" placeholder="Enter your mail" />
                    <button type="submit">Subscribe</button>
                  </form>
                  <p className="newsletter_text">
                    Esteem spirit temper too say adieus who direct esteem
                    esteems luckily.
                  </p>
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
